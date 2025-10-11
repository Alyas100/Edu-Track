export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="py-20 px-8 bg-[#F0F8FF] text-center"
        >
            <h2 className="text-4xl font-bold mb-12 text-black">
                What Our Learners Say
            </h2>

            {/* Testimonials Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-3 gap-10">
                {/* Testimonial 1 */}
                <div className="bg-white p-8 rounded-2xl shadow-md hover:scale-105 transition-transform">
                    <p className="text-gray-700 mb-6 italic">
                        “EduBridge helped me find a tutor right in my town! The sessions are easy to book and so fun.”
                    </p>
                    <h3 className="font-semibold text-black">– Priya Sharma</h3>
                    <p className="text-sm text-gray-500">Student, Rajasthan</p>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-white p-8 rounded-2xl shadow-md hover:scale-105 transition-transform">
                    <p className="text-gray-700 mb-6 italic">
                        “As a peer tutor, I’ve been able to teach others while strengthening my own skills. Love this platform!”
                    </p>
                    <h3 className="font-semibold text-black">– Arjun Mehta</h3>
                    <p className="text-sm text-gray-500">Tutor, Gujarat</p>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-white p-8 rounded-2xl shadow-md hover:scale-105 transition-transform">
                    <p className="text-gray-700 mb-6 italic">
                        “Offline-first mode is a game changer for students in remote areas. Learning has never been easier.”
                    </p>
                    <h3 className="font-semibold text-black">– Neha Patil</h3>
                    <p className="text-sm text-gray-500">Teacher, Maharashtra</p>
                </div>
            </div>

            {/* Social Proof */}
            <div className="mt-16 text-center">
                <p className="text-gray-700 mb-6">
                    Trusted by <span className="font-semibold text-black">10,000+</span> students and tutors across India 🇮🇳
                </p>

                <div className="flex justify-center gap-10 mt-6">
                    <img src="/logos/unicef.png" alt="some" className="h-10 opacity-70 hover:opacity-100 transition" />
                    <img src="/logos/unesco.png" alt="logo" className="h-10 opacity-70 hover:opacity-100 transition" />
                    <img src="/logos/mit.png" alt="of" className="h-10 opacity-70 hover:opacity-100 transition" />
                    <img src="/logos/ncert.png" alt="org" className="h-10 opacity-70 hover:opacity-100 transition" />
                </div>
            </div>
        </section>
    );
}
