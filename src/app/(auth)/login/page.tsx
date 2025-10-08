"use client";

import { createClient } from "../../../../utils/supabase/client";

export default function GoogleSignInButton() {
  const handleSignIn = async () => {
    const supabase = createClient();

    const redirectTo = `${window.location.origin}/auth/v1/callback`;
    console.log(redirectTo);

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo,
      },
    });

    if (error) {
      console.error("Error initiating OAuth:", error.message);
    }
  };

  return <button onClick={handleSignIn}>Sign In with Google</button>;
}
