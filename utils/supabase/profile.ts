import { supabase } from "./client";

export async function syncUserProfile(
  user: {
    id: string;
    email?: string;
    user_metadata?: {
      full_name?: string;
      avatar_url?: string; // Add this
    };
  },
  authMethod: string
) {
  // Check if profile exists with better error handling
  const { error: fetchError } = await supabase
    .from("profiles")
    .select("id")
    .eq("id", user.id)
    .maybeSingle(); // Use maybeSingle to avoid "not found" errors

  if (fetchError) {
    console.error("Error checking profile:", fetchError);
    return { error: fetchError };
  }

  // Determine auth provider based on authMethod, in this case google
  let authProvider = "google";

  // Create profile data with all possible fields
  const profileData: any = {
    id: user.id,
    email: user.email,
    display_name: user.user_metadata?.full_name || user.email?.split("@")[0],
    avatar_url: user.user_metadata?.avatar_url,
    auth_provider: authProvider,
    updated_at: new Date().toISOString(),
  };

  const { error } = await supabase.from("profiles").upsert(profileData);
  return { error };
}
