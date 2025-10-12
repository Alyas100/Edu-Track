"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

const StudentProfileSetup = () => {
  const supabase = createClient();
  const router = useRouter();

  const [name, setName] = useState("");
  const [subjects, setSubjects] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [learningGoals, setLearningGoals] = useState("");
  const [preferredSlots, setPreferredSlots] = useState<
    { day: string; time: string }[]
  >([{ day: "Monday", time: "11:00 AM to 2:00 PM" }]);
  const [isAdding, setIsAdding] = useState<"subject" | "language" | null>(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from("profiles")
        .select("first_name, last_name")
        .eq("id", user.id)
        .single();

      if (!error && data) {
        setName(`${data.first_name} ${data.last_name}`);
      }
    };

    fetchProfile();
  }, [supabase]);

  const handleAddSlot = () => {
    setPreferredSlots([...preferredSlots, { day: "", time: "" }]);
  };

  const handleSlotChange = (index: number, field: string, value: string) => {
    const updated = [...preferredSlots];
    updated[index] = { ...updated[index], [field]: value };
    setPreferredSlots(updated);
  };

  const handleSaveProfile = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return alert("Not logged in");

    const { error } = await supabase.from("students").upsert({
      id: user.id,
      name,
      subjects,
      languages,
      learning_goals: learningGoals,
      preferred_slots: preferredSlots,
    });

    if (error) {
      console.error(error);
      alert("Failed to save profile");
      return;
    }

    await supabase
      .from("profiles")
      .update({ setup_complete: true })
      .eq("id", user.id);

    router.push("/student/dashboard");
  };

  // Handles the modal add action
  const handleAddItem = () => {
    if (!inputValue.trim()) return;

    if (isAdding === "subject" && !subjects.includes(inputValue)) {
      setSubjects([...subjects, inputValue]);
    } else if (isAdding === "language" && !languages.includes(inputValue)) {
      setLanguages([...languages, inputValue]);
    }

    setInputValue("");
    setIsAdding(null);
  };

  return (
    <div className="min-h-screen bg-[#F6FBFF] flex justify-center py-12">
      <div className="bg-transparent w-full max-w-2xl px-6">
        <h1 className="text-xl font-semibold mb-6">Student profile setup</h1>

        <div className="space-y-8">
          {/* Name */}
          <div>
            <label className="block font-medium mb-2">Name</label>
            <p className="text-lg font-semibold">{name}</p>
          </div>

          {/* Subjects */}
          <div>
            <label className="block font-medium mb-2">
              Subjects I want to learn
            </label>

            <div className="flex flex-wrap gap-2 mb-3">
              {subjects.map((subject, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1 bg-[#E6F4FF] text-[#007BFF] px-3 py-1 rounded-full text-sm font-medium"
                >
                  {subject}
                  <button
                    onClick={() =>
                      setSubjects(subjects.filter((s) => s !== subject))
                    }
                    className="hover:text-red-500 ml-1"
                  >
                    ✕
                  </button>
                </span>
              ))}
              <button
                onClick={() => setIsAdding("subject")}
                className="border border-[#007BFF] text-[#007BFF] px-3 py-1 rounded-full text-sm flex items-center hover:bg-[#E6F4FF]"
              >
                + Add Subject
              </button>
            </div>
          </div>

          {/* Languages */}
          <div>
            <label className="block font-medium mb-2">
              Preferred languages
            </label>

            <div className="flex flex-wrap gap-2 mb-3">
              {languages.map((lang, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1 bg-[#E6F4FF] text-[#007BFF] px-3 py-1 rounded-full text-sm font-medium"
                >
                  {lang}
                  <button
                    onClick={() =>
                      setLanguages(languages.filter((l) => l !== lang))
                    }
                    className="hover:text-red-500 ml-1"
                  >
                    ✕
                  </button>
                </span>
              ))}
              <button
                onClick={() => setIsAdding("language")}
                className="border border-[#007BFF] text-[#007BFF] px-3 py-1 rounded-full text-sm flex items-center hover:bg-[#E6F4FF]"
              >
                + Add Language
              </button>
            </div>
          </div>

          {/* Learning Goals */}
          <div>
            <label className="block font-medium mb-2">
              Learning Goals / Notes
            </label>
            <textarea
              placeholder="e.g. Improve for Math Exams"
              value={learningGoals}
              onChange={(e) => setLearningGoals(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-md p-3 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
            />
          </div>

          {/* Time Slots */}
          <div>
            <label className="block font-medium mb-2">
              Preferred days & time slots
            </label>
            <div className="space-y-3">
              {preferredSlots.map((slot, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white rounded-md p-3 border border-gray-100"
                >
                  <input
                    type="text"
                    placeholder="Day"
                    value={slot.day}
                    onChange={(e) => handleSlotChange(i, "day", e.target.value)}
                    className="w-1/3 text-[#007BFF] font-medium focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Time"
                    value={slot.time}
                    onChange={(e) =>
                      handleSlotChange(i, "time", e.target.value)
                    }
                    className="flex-1 text-gray-700 focus:outline-none"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddSlot}
                className="text-[#007BFF] text-sm font-medium hover:underline"
              >
                + Add Slot
              </button>
            </div>
          </div>

          {/* Save Button */}
          <div className="pt-4">
            <button
              onClick={handleSaveProfile}
              className="bg-[#002B5B] text-white px-6 py-2 rounded-md font-medium hover:bg-[#001F40] transition"
            >
              Save & Continue
            </button>
          </div>
        </div>
      </div>
      {isAdding && (
        <div className="fixed inset-0 bg-black/10 bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-2xl w-80">
            <h3 className="text-lg font-semibold mb-3">
              Add a {isAdding === "subject" ? "Subject" : "Language"}
            </h3>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={`Enter ${isAdding}`}
              className="w-full border rounded-lg px-3 py-2 mb-4 focus:ring-2 focus:ring-[#007BFF] outline-none"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsAdding(null)}
                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleAddItem}
                className="px-4 py-2 rounded-lg bg-[#007BFF] text-white hover:bg-[#0065D9]"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentProfileSetup;
