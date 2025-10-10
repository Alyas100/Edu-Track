import Link from "next/link";
import UserDropdown from "./UserDropdown";

interface HeaderProps {
  userType: "student" | "tutor";
  userName: string;
}

export default function Header({ userType, userName }: HeaderProps) {
  const navLinks = {
    student: [
      { href: "/student/find-tutor", label: "Find Tutor" },
      { href: "/student/bookings/all", label: "My Bookings" },
    ],
    tutor: [
      { href: "/tutor/students", label: "My Students" },
      { href: "/tutor/schedule", label: "My Schedule" },
    ],
  };

  const currentLinks = navLinks[userType];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-600">EduBridge</span>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {currentLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <UserDropdown userName={userName} userType={userType} />
          </div>
        </div>
      </div>
    </nav>
  );
}
