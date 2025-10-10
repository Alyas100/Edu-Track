import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

async function updateUserRole(selectedRole: "student" | "tutor") {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();
  if (userError || !user) {
    console.error("Error fetching current user:", userError);
    return;
  }

  const { error } = await supabase
    .from("profiles")
    .update({ role: selectedRole, updated_at: new Date().toISOString() })
    .eq("id", user.id);

  if (error) {
    console.error("Error updating user role:", error.message);
  } else {
    console.log(`✅ Role set to ${selectedRole}`);
  }
}
export default updateUserRole;
