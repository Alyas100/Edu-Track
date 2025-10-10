import Link from "next/link";
import Header from "../../../../components/dashboard/layout/Header";

export default function StudentDashboard() {
  const recommendedTutors = [
    { id: 1, name: "Mr. Ahmad", subjects: ["Math", "English"] },
    { id: 2, name: "Ms. Tan", subjects: ["Physics"] },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header userType="student" userName="John" />

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900">
            Student Dashboard
          </h1>
          <p className="mt-2 text-lg text-gray-600">Welcome, John!</p>
        </div>

        {/* Student-specific content */}
        <div className="px-4 py-6 sm:px-0">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Recommended Tutors
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recommendedTutors.map((tutor) => (
              <div key={tutor.id} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">{tutor.name}</h3>
                <p className="text-gray-600 mb-4">
                  Subjects: {tutor.subjects.join(", ")}
                </p>
                <Link href="/student/bookings/new">
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                    Book Session
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
