import { supabase } from "./client";

export async function syncUserProfile(
  user: {
    id: string;
    email?: string;
    user_metadata?: { full_name?: string };
  },
  authMethod: string
) {
  // Check if profile exists with better error handling
  const { data: existingProfile, error: fetchError } = await supabase
    .from("profiles")
    .select("id, has_password_login, has_google_login")
    .eq("id", user.id)
    .maybeSingle(); // Use maybeSingle to avoid "not found" errors

  if (fetchError) {
    console.error("Error checking profile:", fetchError);
    return { error: fetchError };
  }

  const isNewProfile = !existingProfile;

  // Create profile data with all possible fields
  const profileData: any = {
    id: user.id,
    email: user.email,
    display_name: user.user_metadata?.full_name || user.email?.split("@")[0],
    updated_at: new Date().toISOString(),
  };

  if (isNewProfile) {
    // New profile - set all fields
    profileData.created_at = new Date().toISOString();
    profileData.has_password_login = authMethod === "password";
    profileData.has_google_login = authMethod === "google";
  } else {
    // Existing profile - preserve existing auth methods, add new one
    profileData.has_password_login =
      existingProfile.has_password_login || authMethod === "password";
    profileData.has_google_login =
      existingProfile.has_google_login || authMethod === "google";
  }

  const { error } = await supabase.from("profiles").upsert(profileData);
  return { error };
}
