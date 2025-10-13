import { SupabaseClient } from "@supabase/supabase-js";

export async function handleGoogleProfileSync(
  // 2. MUST ACCEPT THE AUTHENTICATED CLIENT FROM THE GET HANDLER
  supabase: SupabaseClient,
  user: {
    id: string;
    email?: string;
    user_metadata?: {
      full_name?: string;
      avatar_url?: string;
    };
  }
) {
  const authProvider = "google";

  const profileData: any = {
    id: user.id,
    email: user.email,
    display_name: user.user_metadata?.full_name || user.email?.split("@")[0],
    avatar_url: user.user_metadata?.avatar_url,
    auth_provider: authProvider,
    updated_at: new Date().toISOString(),
  };

  console.log("savng........");

  // 3. USE THE PASSED-IN CLIENT
  const { data, error } = await supabase.from("profiles").upsert(profileData);

  if (error) {
    console.error("Profile UPSERT failed during sync:", error.message);
  }

  return { error };
}
