import { ReactNode } from "react";
import React from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-[#F6FBFF] w-full h-screen flex flex-col items-center justify-center text-center">
      {children}
    </div>
  );
};
export default AuthLayout;
