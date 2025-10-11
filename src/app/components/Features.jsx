export default function Features() {
    return (
        <section
            id="features"
            className="py-20 px-8 bg-[#F6FBFF] text-center"
        >
            <h2 className="text-4xl font-bold mb-12 text-black">Key Features</h2>

            <div className="max-w-6xl mx-auto grid grid-cols-3 gap-10">
                {/* Feature 1 */}
                <div className="bg-[#D7F7FF] p-8 rounded-2xl shadow-md hover:scale-105 transition-transform">
                    <h3 className="text-2xl font-semibold mb-3">👩‍🏫 Peer Tutoring</h3>
                    <p className="text-gray-700">
                        Find and connect with local peer tutors who understand your learning needs.
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="bg-[#D7F7FF] p-8 rounded-2xl shadow-md hover:scale-105 transition-transform">
                    <h3 className="text-2xl font-semibold mb-3">📚 Open Curriculum</h3>
                    <p className="text-gray-700">
                        Access an open-source curriculum mapped to regional education boards.
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="bg-[#D7F7FF] p-8 rounded-2xl shadow-md hover:scale-105 transition-transform">
                    <h3 className="text-2xl font-semibold mb-3">🌐 Offline Support</h3>
                    <p className="text-gray-700">
                        Learn anytime — even with limited internet — through our offline-first design.
                    </p>
                </div>
            </div>
        </section>
    );
}
