// src/app/auth/confirm/route.ts (or app/auth/confirm/route.ts)
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  console.log(" Confirm route hit!");

  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  console.log(" Code:", code);

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      console.log("Success!");
      // Redirect to dashboard or home
      return NextResponse.redirect(`${origin}/dashboard`);
    }

    console.error(" Error:", error);
  }

  // Redirect to error page
  return NextResponse.redirect(`${origin}/register?error=confirmation_failed`);
}
