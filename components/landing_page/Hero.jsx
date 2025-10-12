export default function Hero() {
    return (
        <section id="hero" className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-24 bg-[#D7F7FF] text-black">
            {/* Left Side — Text Content */}
            <div className="flex-1 space-y-6 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Bridge the Gap Between <br /> Students and Tutors
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-lg mx-auto md:mx-0">
                    EduBridge connects learners and educators seamlessly — find the right tutor,
                    book sessions, and start learning today.
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                    <a
                        href="/signup"
                        className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition"
                    >
                        Get Started
                    </a>
                    <a
                        href="#demo"
                        className="px-6 py-3 bg-transparent border-2 border-black rounded-full font-medium hover:bg-black hover:text-white transition"
                    >
                        🎥 Watch Demo
                    </a>
                </div>
            </div>

            {/* Right Side — Illustration/Image */}
            <div className="flex-1 mt-10 md:mt-0 flex justify-center">
                <img
                    src="images/hero_illustration.png"
                    alt="Students learning illustration"
                    className="w-[300px] md:w-[450px] object-contain"
                />
            </div>
        </section>
    );
}
