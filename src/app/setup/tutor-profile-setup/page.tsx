"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import TutorProfileSetup from "@/components/profileSetup/TutorProfileSetup";

const TutorSetupPage = () => {
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const checkUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (!data?.user) {
        router.push("/login");
      }
    };
    checkUser();
  }, [supabase, router]);

  return <TutorProfileSetup />;
};

export default TutorSetupPage;
