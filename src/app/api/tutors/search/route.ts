// app/api/tutors/search/route.ts - WITH EXTRA DEBUGGING
import { supabase } from "../../../../../utils/supabase/client";

export async function POST(request: Request) {
  const {
    studentLat,
    studentLng,
    subject,
    maxDistance = 20,
  } = await request.json();

  console.log("SEARCH REQUEST:", {
    studentLat,
    studentLng,
    subject,
    maxDistance,
  });

  try {
    // Use the optimized RPC function
    const { data: tutors, error } = await supabase.rpc("search_nearby_tutors", {
      student_lat: studentLat,
      student_lng: studentLng,
      max_distance: maxDistance,
      search_subject: subject || null, // Ensure null if empty string
    });

    console.log("RPC RESPONSE:", {
      tutorsCount: tutors?.length || 0,
      tutors: tutors,
      error: error,
    });

    if (error) {
      console.error("RPC error:", error);
      return Response.json({ error: error.message }, { status: 500 });
    }

    console.log("SUCCESS - Returning tutors:", tutors?.length || 0);
    return Response.json({ tutors: tutors || [] });
  } catch (err) {
    console.log("UNEXPECTED error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
