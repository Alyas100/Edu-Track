import { handleGoogleProfileSync } from "@/utils/supabase/googleProfileSave";
import { NextResponse } from "next/server";
import { createClient } from "../../../../../../utils/supabase/server";

// Use dynamic = 'force-dynamic' to ensure this handler is not statically cached
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  console.log("this startingg.......");
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  // redirect to 'setup' page if success
  let next = searchParams.get("next") ?? "/setup";
  if (!next.startsWith("/")) {
    next = "/"; // Ensure it's a relative path if not provided
  }

  if (code) {
    // Create the server-side Supabase client
    const supabase = await createClient();

    // Exchange the temporary code for a user session
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    console.log("this pass......");

    if (error) {
      // Log the actual error for debugging in the terminal
      console.error("SUPABASE EXCHANGE FAILED:", error.message);
      // Redirect to a specific error page with the message
      return NextResponse.redirect(
        `${origin}/auth/auth-code-error?error=${encodeURIComponent(
          error.message
        )}`
      );
    }

    // --HANDLE LOGIC FOR SAVING GOOGLE LOGIN TO DATABASE TABLE
    const {
      data: { user },
    } = await supabase.auth.getUser();

    // Only sync if user exists
    if (user) {
      try {
        await handleGoogleProfileSync(supabase, user); // Assuming handleGoogleProfileSync only takes 2 args now: (supabase, user)
      } catch (profileError) {
        console.error("Profile sync failed:", profileError);
      }
    } else {
      console.error("No user found after auth exchange");
    }

    // Success: Redirect the user to the intended page
    // The existing logic for handling forwarded host is good for deployment
    const forwardedHost = request.headers.get("x-forwarded-host");
    const isLocalEnv = process.env.NODE_ENV === "development";

    if (isLocalEnv) {
      // for local env
      return NextResponse.redirect(`${origin}${next}`);
    } else if (forwardedHost) {
      // for production env
      return NextResponse.redirect(`https://${forwardedHost}${next}`);
    } else {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }
}
