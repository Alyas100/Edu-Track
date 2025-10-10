"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

interface StudentProfileSetupProps {
  onBack: () => void; // option to go back to role selection
}

const StudentProfileSetup = () => {
  const [fullName, setFullName] = useState<string | null>(null);
  useEffect(() => {
    const fetchUserName = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data, error } = await supabase
        .from("profiles")
        .select("display_name")
        .eq("id", user.id)
        .single();

      if (error) {
        console.error("Error fetching user:", error.message);
        return;
      }

      setFullName(data.display_name);
    };
    fetchUserName();
  }, []);
  return (
    <div className="pl-16 pt-8">
      <h2 className="text-2xl font-semibold">Student Profile Setup</h2>
      {/* Student Name */}
      <div className="mt-4">
        <p className="font-semibold">Name</p>
        <p>{fullName ?? "Loading..."}</p>
      </div>
      {/* Others */}
      <div></div>
    </div>
  );
};
export default StudentProfileSetup;
