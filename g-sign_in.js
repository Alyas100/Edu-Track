"use client"; // This makes the file a client component

await supabase.auth.signInWithOAuth({
  provider,
  options: {
    // This is required for the Server-Side PKCE flow in Next.js
    redirectTo: `http://example.com/auth/callback`,
  },
});
