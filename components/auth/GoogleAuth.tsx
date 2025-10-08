import Image from "next/image";
const GoogleAuth = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mt-6">
        <hr className="flex-1 border-gray-300" />
        <span className="px-2">or continue with</span>
        <hr className="flex-1 border-gray-300" />
      </div>

      <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-[5px] w-full p-2 mt-6">
        <span>
          <Image
            src="/images/google.png"
            width={16}
            height={16}
            alt="Google logo"
          />
        </span>
        Google
      </button>
    </div>
  );
};
export default GoogleAuth;
