import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

// Creates a client for use in Server Components, Server Actions, and Route Handlers.
// It uses Next.js `cookies()` to read/write the secure HTTP-only session cookie.
export async function createClient() {
  const cookieStore = cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        async getAll() {
          return (await cookieStore).getAll();
        },
        // This is a required method for the library, but the cookie logic
        // is generally handled by Next.js Middleware/Headers on the server.
        setAll() {
          try {
            // Can be ignored if handled by middleware.
          } catch {
            // No operation in Server Components.
          }
        },
      },
    }
  );
}
