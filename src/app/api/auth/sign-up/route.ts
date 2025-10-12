// app/api/auth/signup/route.ts
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    console.log("Sign-up API called");

    const { email, password, firstName, lastName } = await request.json();

    // Use server-side Supabase client
    const supabase = await createClient();

    // Sign up with Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `http://localhost:3000/auth/confirm`,
      },
    });

    console.log(" Auth response:", { authData, authError });

    if (authError) {
      console.error(" Auth error:", authError);

      return NextResponse.json({ error: authError.message }, { status: 400 });
    }

    if (authData.user) {
      // Create profile in database
      const { error: profileError } = await supabase.from("profiles").upsert({
        id: authData.user.id,
        email: authData.user.email,
        display_name: `${firstName} ${lastName}`,
        first_name: firstName,
        last_name: lastName,
        auth_provider: "email",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });

      if (profileError) {
        return NextResponse.json(
          { error: profileError.message },
          { status: 500 }
        );
      }

      return NextResponse.json({
        message: "Signup successful",
        user: authData.user,
      });
    }

    return NextResponse.json({ error: "Signup failed" }, { status: 400 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
