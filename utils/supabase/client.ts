import { createBrowserClient } from "@supabase/ssr";

// Creates a client for use in Client Components ('use client').
// It uses the browser's local storage to manage the session.
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
