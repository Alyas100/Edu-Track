export default function CallToAction() {
    return (
        <section
            id="join"
            className="py-20 bg-[#D7F7FF] text-center flex flex-col items-center justify-center"
        >
            <h2 className="text-4xl font-bold mb-6 text-black">
                Ready to Start Your Learning Journey?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl">
                Join EduBridge today and connect with passionate tutors and learners in your community.
            </p>

            <div className="flex gap-6">
                <a
                    href="#signup"
                    className="inline-block px-8 py-3 bg-black text-white rounded-full font-medium hover:scale-105 hover:bg-gray-800 transition-transform duration-300"
                >
                    Sign Up Free
                </a>

                <a
                    href="#features"
                    className="inline-block px-8 py-3 bg-white text-black rounded-full font-medium hover:scale-105 hover:bg-[#A7F7FF] transition-transform duration-300"
                >
                    Learn More
                </a>
            </div>
        </section>
    );
}
