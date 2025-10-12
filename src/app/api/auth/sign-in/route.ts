// app/api/auth/sign-in/route.ts
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    console.log("Login API called");

    const body = await request.json();
    console.log("📨 Raw request body:", body);

    const { email, password } = body;
    console.log("📧 Extracted email:", email);
    console.log("🔑 Extracted password:", password ? "***" : "empty");

    // Validate required fields
    if (!email || !password) {
      console.error("❌ Missing email or password");
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    // Sign in with Supabase Auth
    const { data: authData, error: authError } =
      await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password,
      });

    console.log("Auth response:", {
      user: authData?.user ? "User exists" : "No user",
      session: authData?.session ? "Session exists" : "No session",
      error: authError?.message,
    });

    if (authError) {
      console.error("Auth error:", authError);

      // Handle specific error cases
      if (authError.message.includes("email_not_confirmed")) {
        return NextResponse.json(
          {
            error:
              "Please verify your email address before logging in. Check your inbox for the confirmation email.",
            code: "email_not_confirmed",
          },
          { status: 400 }
        );
      }

      if (authError.message.includes("Invalid login credentials")) {
        return NextResponse.json(
          { error: "Invalid email or password" },
          { status: 400 }
        );
      }

      return NextResponse.json({ error: authError.message }, { status: 400 });
    }

    if (authData.user) {
      console.log("Login successful");
      return NextResponse.json({
        message: "Login successful",
        user: authData.user,
      });
    }

    return NextResponse.json({ error: "Login failed" }, { status: 400 });
  } catch (error) {
    console.log("💥 Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
