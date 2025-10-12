"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import GoogleAuth from "./GoogleAuth";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    // Basic validation
    if (!formData.email.trim() || !formData.password.trim()) {
      setError("Please fill in all fields");
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email.trim(),
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful!", data);
        // Redirect to dashboard or show success message
        router.push("/dashboard");
      } else {
        console.error("Login failed:", data.error);
        setError(data.error || "Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Network error:", error);
      setError("Network error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Title */}
      <div>
        <p>Welcome to</p>
        <h1 className="text-[32px] font-bold mb-[35px]">EduTrack</h1>
      </div>
      {/* Form */}
      <div className="bg-white rounded-[10px] w-md sm:w-[540px] shadow-md px-[10px] py-[25px]">
        <h2 className="text-2xl font-bold text-[#0088FF] uppercase mb-4">
          Login
        </h2>
        <div className="text-left w-3/4 m-auto">
          {/* Error Message */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin}>
            {" "}
            {/* Use onSubmit instead of onClick */}
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="bg-[#F5F5F5] rounded-[5px] w-full p-[4px] mt-2"
              required
              placeholder="Enter your email"
            />
            <label htmlFor="password" className="block font-semibold mt-4">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="bg-[#F5F5F5] rounded-[5px] w-full p-[4px] mt-2"
              required
              placeholder="Enter your password"
            />
            <button
              type="submit" // Change to submit
              disabled={loading}
              className="bg-[#0088FF] text-white rounded-[5px] w-full p-[4px] mt-4 disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
            {/* Login with Google */}
            <GoogleAuth />
          </form>
          <p className="text-sm text-gray-500 mt-6 mb-2 text-center">
            Don&apos;t have an account yet?{" "}
            <Link href="/register">
              <span className="text-[#0088FF] hover:underline">Sign up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
