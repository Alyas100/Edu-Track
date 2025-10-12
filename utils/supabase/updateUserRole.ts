import { createClient } from "./client";

export default async function updateUserRole(role: "student" | "tutor") {
  const supabase = createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    console.error("No authenticated user found:", userError);
    return;
  }

  const { error: updateError } = await supabase
    .from("profiles")
    .update({ role })
    .eq("id", user.id);

  if (updateError) console.error("Failed to update role:", updateError);
}
