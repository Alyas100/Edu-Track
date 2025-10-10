// app/student/bookings/page.tsx
"use client";

import { useState } from "react";
import Header from "../../../../../components/dashboard/layout/Header";

export default function MyBookingsPage() {
  const [bookings, setBookings] = useState([
    {
      id: "1",
      tutorName: "Mr. Ahmad",
      subject: "Math",
      date: "2024-01-15",
      time: "3:00 PM",
      duration: "60 min",
      status: "confirmed",
      price: "RM 50",
    },
    {
      id: "2",
      tutorName: "Ms. Sarah",
      subject: "English",
      date: "2024-01-16",
      time: "4:30 PM",
      duration: "90 min",
      status: "pending",
      price: "RM 75",
    },
    {
      id: "3",
      tutorName: "Mr. Lim",
      subject: "Physics",
      date: "2024-01-10",
      time: "2:00 PM",
      duration: "60 min",
      status: "completed",
      price: "RM 50",
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-blue-100 text-blue-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleCancelBooking = (bookingId: string) => {
    if (confirm("Are you sure you want to cancel this booking?")) {
      setBookings(
        bookings.map((booking) =>
          booking.id === bookingId
            ? { ...booking, status: "cancelled" }
            : booking
        )
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header userType="student" userName="John" />

      <main className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Bookings</h1>
          <p className="mt-2 text-gray-600">
            Manage your tutoring sessions and track your bookings
          </p>
        </div>

        {/* Bookings List */}
        <div className="space-y-6">
          {bookings.length > 0 ? (
            bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  {/* Booking Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">
                          {booking.tutorName}
                        </h3>
                        <p className="text-gray-600 mt-1">{booking.subject}</p>
                      </div>
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                          booking.status
                        )}`}
                      >
                        {booking.status.charAt(0).toUpperCase() +
                          booking.status.slice(1)}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-600">Date:</span>
                        <p className="text-gray-800">
                          {new Date(booking.date).toLocaleDateString()}
                        </p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-600">Time:</span>
                        <p className="text-gray-800">{booking.time}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-600">
                          Duration:
                        </span>
                        <p className="text-gray-800">{booking.duration}</p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <span className="font-medium text-gray-600">Price:</span>
                      <p className="text-lg font-semibold text-gray-800">
                        {booking.price}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-4 md:mt-0 md:ml-6 flex space-x-3">
                    {booking.status === "confirmed" && (
                      <button
                        onClick={() => handleCancelBooking(booking.id)}
                        className="px-4 py-2 border border-red-600 text-red-600 rounded-md hover:bg-red-50 transition duration-200"
                      >
                        Cancel
                      </button>
                    )}
                    {booking.status === "pending" && (
                      <button
                        onClick={() => handleCancelBooking(booking.id)}
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition duration-200"
                      >
                        Cancel
                      </button>
                    )}
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">
                      View Details
                    </button>
                  </div>
                </div>

                {/* Upcoming Session Notice */}
                {booking.status === "confirmed" &&
                  new Date(booking.date) > new Date() && (
                    <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
                      <p className="text-blue-700 text-sm">
                        ⏰ Your session with {booking.tutorName} is coming up on{" "}
                        {new Date(booking.date).toLocaleDateString()} at{" "}
                        {booking.time}
                      </p>
                    </div>
                  )}
              </div>
            ))
          ) : (
            /* Empty State */
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <div className="max-w-md mx-auto">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No bookings yet
                </h3>
                <p className="text-gray-600 mb-6">
                  You haven't made any tutoring bookings yet. Find a tutor and
                  schedule your first session!
                </p>
                <button
                  onClick={() => (window.location.href = "/student/find-tutor")}
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-200"
                >
                  Find a Tutor
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Stats Summary */}
        {bookings.length > 0 && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg shadow p-4 text-center">
              <div className="text-2xl font-bold text-gray-900">
                {bookings.length}
              </div>
              <div className="text-gray-600 text-sm">Total Bookings</div>
            </div>
            <div className="bg-white rounded-lg shadow p-4 text-center">
              <div className="text-2xl font-bold text-green-600">
                {bookings.filter((b) => b.status === "confirmed").length}
              </div>
              <div className="text-gray-600 text-sm">Confirmed</div>
            </div>
            <div className="bg-white rounded-lg shadow p-4 text-center">
              <div className="text-2xl font-bold text-yellow-600">
                {bookings.filter((b) => b.status === "pending").length}
              </div>
              <div className="text-gray-600 text-sm">Pending</div>
            </div>
            <div className="bg-white rounded-lg shadow p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">
                {bookings.filter((b) => b.status === "completed").length}
              </div>
              <div className="text-gray-600 text-sm">Completed</div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
