"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import ChooseRole from "@/components/profileSetup/ChooseRole";
import updateUserRole from "@/utils/supabase/updateUserRole";

const SetupPage = () => {
  const router = useRouter();
  const supabase = createClient();

  const handleSelectRole = async (selectedRole: "student" | "tutor") => {
    await updateUserRole(selectedRole);

    // Redirect to next setup step
    if (selectedRole === "student") {
      router.push("/setup/student-profile-setup");
    } else {
      router.push("/setup/tutor-profile-setup");
    }
  };

  return (
    <div>
      <ChooseRole onSelectRole={handleSelectRole} />
    </div>
  );
};

export default SetupPage;
