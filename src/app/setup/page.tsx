"use client";
import { useState } from "react";
import ChooseRole from "@/components/profileSetup/ChooseRole";
import StudentProfileSetup from "@/components/profileSetup/StudentProfileSetup";
import TutorProfileSetup from "@/components/profileSetup/TutorProfileSetup";
import updateUserRole from "@/utils/supabase/updateUserRole";

const RoleSetupPage = () => {
  const [role, setRole] = useState<"student" | "tutor" | null>(null);

  // handle role selection
  const handleSelectRole = async (selectedRole: "student" | "tutor") => {
    await updateUserRole(selectedRole);
    setRole(selectedRole);
  };
  return (
    <div>
      {!role && <ChooseRole onSelectRole={handleSelectRole} />}
      {role === "student" && <StudentProfileSetup />}
      {role === "tutor" && <TutorProfileSetup />}
    </div>
  );
};
export default RoleSetupPage;
