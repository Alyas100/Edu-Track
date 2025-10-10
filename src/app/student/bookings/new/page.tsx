// app/student/bookings/new/page.tsx
"use client";

import { useState } from "react";
import Header from "../../../../../components/dashboard/layout/Header";

export default function NewBookingPage() {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [isBooking, setIsBooking] = useState(false);

  const tutor = {
    id: 1,
    name: "Mr. Ahmad",
    subject: "Math",
    availableSlots: [
      { id: "mon-3pm", day: "Mon", time: "3:00 PM" },
      { id: "wed-4pm", day: "Wed", time: "4:00 PM" },
    ],
  };

  const handleConfirmBooking = async () => {
    if (!selectedSlot) return;

    setIsBooking(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Booking confirmed for:", selectedSlot);
    setIsBooking(false);
    // Redirect to bookings page or show success message
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header userType="student" userName="John" />

      <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          {/* <Link
            href="/student/find-tutor"
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            ← Back t
          </Link> */}
        </nav>

        {/* Booking Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Booking with {tutor.name}
          </h1>
          <p className="text-gray-600">Schedule your tutoring session</p>
        </div>

        {/* Booking Details */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Subject: {tutor.subject}
            </h2>
          </div>

          {/* Available Slots */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">
              Available Slots:
            </h3>
            <div className="space-y-3">
              {tutor.availableSlots.map((slot) => (
                <div
                  key={slot.id}
                  className={`flex items-center justify-between p-4 border rounded-lg ${
                    selectedSlot === slot.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div>
                    <span className="font-medium text-gray-800">
                      {slot.day} {slot.time}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedSlot(slot.id)}
                    className={`px-4 py-2 rounded-md text-sm font-medium ${
                      selectedSlot === slot.id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {selectedSlot === slot.id ? "Selected" : "Select"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Confirm Booking Button */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <button
            onClick={handleConfirmBooking}
            disabled={!selectedSlot || isBooking}
            className={`w-full py-3 px-4 rounded-md text-lg font-semibold ${
              !selectedSlot || isBooking
                ? "bg-gray-400 cursor-not-allowed text-gray-200"
                : "bg-green-600 hover:bg-green-700 text-white"
            }`}
          >
            {isBooking ? "Booking..." : "Confirm Booking"}
          </button>

          {!selectedSlot && (
            <p className="text-red-500 text-sm mt-2 text-center">
              Please select a time slot to continue
            </p>
          )}
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            You will be able to review and manage your bookings in the "My
            Bookings" section.
          </p>
        </div>
      </main>
    </div>
  );
}
