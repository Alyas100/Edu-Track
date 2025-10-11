export default function HowItWorks() {
    return (
        <section
            id="howitworks"
            className="py-20 px-8 bg-[#F8FDFF] text-center"
        >
            <h2 className="text-4xl font-bold mb-12 text-black">
                How It Works
            </h2>

            {/* Step Cards */}
            <div className="max-w-6xl mx-auto grid grid-cols-4 gap-10">
                {/* Step 1 */}
                <div className="bg-[#D7F7FF] p-8 rounded-2xl shadow-md hover:scale-105 transition-transform">
                    <div className="text-5xl mb-4">📝</div>
                    <h3 className="text-2xl font-semibold mb-3">1. Sign Up</h3>
                    <p className="text-gray-700">
                        Create your free EduBridge account and set up your learning profile.
                    </p>
                </div>

                {/* Step 2 */}
                <div className="bg-[#D7F7FF] p-8 rounded-2xl shadow-md hover:scale-105 transition-transform">
                    <div className="text-5xl mb-4">🔍</div>
                    <h3 className="text-2xl font-semibold mb-3">2. Find a Tutor or Student</h3>
                    <p className="text-gray-700">
                        Browse through local learners or tutors who match your goals.
                    </p>
                </div>

                {/* Step 3 */}
                <div className="bg-[#D7F7FF] p-8 rounded-2xl shadow-md hover:scale-105 transition-transform">
                    <div className="text-5xl mb-4">📅</div>
                    <h3 className="text-2xl font-semibold mb-3">3. Book a Session</h3>
                    <p className="text-gray-700">
                        Schedule a convenient time to connect and start learning.
                    </p>
                </div>

                {/* Step 4 */}
                <div className="bg-[#D7F7FF] p-8 rounded-2xl shadow-md hover:scale-105 transition-transform">
                    <div className="text-5xl mb-4">🤝</div>
                    <h3 className="text-2xl font-semibold mb-3">4. Learn Together</h3>
                    <p className="text-gray-700">
                        Engage in fun, collaborative sessions and grow your knowledge together.
                    </p>
                </div>
            </div>
        </section>
    );
}
