// components/layout/UserDropdown.tsx
"use client";
// THIS USED INSIDE Header.tsx currently
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface UserDropdownProps {
  userName: string;
  userType: "student" | "tutor";
}

export default function UserDropdown({
  userName,
  userType,
}: UserDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    // Add your logout logic here
    console.log("Logging out...");
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 focus:outline-none"
      >
        {userName} ▼
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
          {/* Profile Link */}
          <Link
            href={`/${userType}/profile`}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            👤 My Profile
          </Link>

          {/* Settings Link */}
          <Link
            href={`/${userType}/settings`}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            ⚙️ Settings
          </Link>

          {/* Divider */}
          <div className="border-t border-gray-100 my-1"></div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
          >
            🚪 Logout
          </button>
        </div>
      )}
    </div>
  );
}
