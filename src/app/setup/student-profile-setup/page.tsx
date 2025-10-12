"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/utils/supabase/client"
import StudentProfileSetup from "@/components/profileSetup/StudentProfileSetup"

const StudentProfileSetupPage = () => {
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const checkUser = async () => {
      const { data, error } = await supabase.auth.getUser()
      if (!data?.user) {
        router.push("/login")
      }
    }
    checkUser()
  }, [supabase, router])

  return <StudentProfileSetup />
}

export default StudentProfileSetupPage
