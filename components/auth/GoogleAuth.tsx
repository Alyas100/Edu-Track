"use client";

import Image from "next/image";
import { createClient } from "../../utils/supabase/client";

// login for handling g-sign in button
const GoogleAuth = () => {
  // Define the correct sign-in logic function ---
  const handleGoogleSignIn = async () => {
    // Initialize Supabase client
    const supabase = createClient();

    // Define the redirection URL after successful sign-in
    const redirectTo = `${window.location.origin}/api/auth/v1/callback`;

    //  Initiate the OAuth flow
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo, // adjust this later to redirect to dashboard
      },
    });

    if (error) {
      console.error("Error during Google OAuth:", error.message);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mt-6">
        <hr className="flex-1 border-gray-300" />
        <span className="px-2">or continue with</span>
        <hr className="flex-1 border-gray-300" />
      </div>

      <button
        className="flex items-center justify-center gap-2 border border-gray-300 rounded-[5px] w-full p-2 mt-6"
        onClick={handleGoogleSignIn}
      >
        <span>
          <Image
            src="/images/google.png"
            width={16}
            height={16}
            alt="Google logo"
          />
        </span>
        Google
      </button>
    </div>
  );
};
export default GoogleAuth;
