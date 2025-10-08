import GoogleAuth from "./GoogleAuth";
import Link from "next/link";

const SignupForm = () => {
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
          Sign up
        </h2>
        <div className="text-left w-3/4 m-auto">
          <form>
            <div className="sm:flex space-y-3 sm:gap-x-4 mb-4 sm:mb-0">
              <div className="flex-1">
                <label
                  htmlFor="firstName"
                  className="font-semibold block"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="bg-[#F5F5F5] rounded-[5px] w-full p-[4px] mt-2"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="lastName"
                  className="font-semibold block"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="bg-[#F5F5F5] rounded-[5px] w-full p-[4px] mt-2"
                />
              </div>
            </div>

            <label
              htmlFor="email"
              className=" font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              className="bg-[#F5F5F5] rounded-[5px] w-full p-[4px] mt-2"
            />

            <label
              htmlFor="password"
              className="block font-semibold mt-4"
            >
              Password
            </label>
            <input
              type="password"
              className="bg-[#F5F5F5] rounded-[5px] w-full p-[4px] mt-2"
            />
            <button className="bg-[#0088FF] text-white rounded-[5px] w-full p-[4px] mt-4">
              Sign Up
            </button>
            {/* Signup/Login with Google */}
            <GoogleAuth />
          </form>
          <p className="text-sm text-gray-500 mt-6 mb-2 text-center">
            Already have an account?{" "}
            <Link href="/login">
              <span className="text-[#0088FF] hover:underline">Log in</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default SignupForm;
