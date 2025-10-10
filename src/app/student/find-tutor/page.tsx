"use client";

import { useGeolocation } from "@/src/hooks/useGeolocation";
import { useState } from "react";
import Header from "../../../../components/dashboard/layout/Header";

export default function FindTutorPage() {
  const { location, error: locationError } = useGeolocation();
  const [tutors, setTutors] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const [hasSearched, setHasSearched] = useState(false); // Track if user has searched
  const [filters, setFilters] = useState({
    subject: "",
    language: "",
    availability: "",
    maxDistance: 10, // km
  });

  const searchTutors = async () => {
    if (!location) return;

    setIsLoading(true);
    setHasSearched(true);

    try {
      const response = await fetch("/api/tutors/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentLat: location.lat,
          studentLng: location.lng,
          subject: filters.subject || null,
          maxDistance: filters.maxDistance,
        }),
      });

      const data = await response.json();
      setTutors(data.tutors || []);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header userType="student" userName="John" />

      <main className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Find Tutor</h1>
          <p className="mt-2 text-gray-600">
            Search and book sessions with qualified tutors
          </p>
        </div>

        {/* Search Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Subject Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <select
                value={filters.subject}
                onChange={(e) =>
                  setFilters({ ...filters, subject: e.target.value })
                }
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Subjects</option>
                <option value="math">Math</option>
                <option value="english">English</option>
                <option value="physics">Physics</option>
              </select>
            </div>

            {/* Language Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Language
              </label>
              <select
                value={filters.language}
                onChange={(e) =>
                  setFilters({ ...filters, language: e.target.value })
                }
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Languages</option>
                <option value="english">English</option>
                <option value="malay">Malay</option>
              </select>
            </div>

            {/* Distance Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Distance: {filters.maxDistance}km
              </label>
              <input
                type="range"
                min="1"
                max="50"
                value={filters.maxDistance}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    maxDistance: parseInt(e.target.value),
                  })
                }
                className="w-full"
              />
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button
                onClick={searchTutors}
                disabled={!location || isLoading} // Disable while loading or no location
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isLoading ? "Searching..." : "Search Tutors"}
              </button>
            </div>
          </div>

          {/* Location Status */}
          {!location && !locationError && (
            <p className="text-blue-500 mt-4 text-sm">
              Enable location access to search for nearby tutors
            </p>
          )}

          {locationError && (
            <p className="text-red-500 mt-4 text-sm">{locationError}</p>
          )}
        </div>

        {/* Tutor Results */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            {hasSearched
              ? `Tutor Results ${tutors.length > 0 ? `(${tutors.length})` : ""}`
              : "Search for Tutors"}
          </h2>

          <div className="space-y-6">
            {isLoading ? (
              <div className="text-center py-8">
                <p className="text-gray-500">Searching for tutors...</p>
              </div>
            ) : hasSearched && tutors.length > 0 ? (
              tutors.map((tutor: any) => (
                <div
                  key={tutor.id}
                  className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
                >
                  {/* Your tutor card content */}
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {tutor.name}
                  </h3>
                  <p>Subjects: {tutor.subjects?.join(", ")}</p>
                  <p>Distance: {tutor.distance_km?.toFixed(1)} km</p>
                  {/* ... rest of your tutor card */}
                </div>
              ))
            ) : hasSearched ? (
              <div className="text-center py-8">
                <p className="text-gray-500">
                  No tutors found. Try increasing search distance.
                </p>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">
                  Use the filters above to search for tutors.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
