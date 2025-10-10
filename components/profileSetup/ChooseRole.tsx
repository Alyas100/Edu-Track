import Image from "next/image";
interface ChooseRoleProps {
  onSelectRole: (role: "student" | "tutor") => void;
}

const ChooseRole = ({ onSelectRole }: ChooseRoleProps) => {
  return (
    <div className="bg-[#F6FBFF] w-full h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-[32px] font-bold ">Choose your role</h1>
      <p className="mb-8">This helps us organize your dashboard</p>
      <div className="space-x-4">
        <div className="inline-block">
          <button
            onClick={() => onSelectRole("student")}
            type="button"
            className="hover:cursor-pointer bg-white rounded-lg border-2 border-white hover:border-[#0088FF] p-12"
          >
            <Image
              width={150}
              height={150}
              src="/images/graduating-student.png"
              alt="Graduating Student"
            />
            <p className="mt-4 font-bold text-[#0088FF]">I&apos;m a student</p>
          </button>
        </div>
        <div className="inline-block">
          <button
            onClick={() => onSelectRole("tutor")}
            type="button"
            className="hover:cursor-pointer bg-white rounded-lg border-2 border-white hover:border-[#0088FF] p-12"
          >
            <Image
              width={150}
              height={150}
              src="/images/teacher.png"
              alt="Tutor"
            />
            <p className="mt-4 font-bold text-[#0088FF]">I&apos;m a tutor</p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChooseRole;
