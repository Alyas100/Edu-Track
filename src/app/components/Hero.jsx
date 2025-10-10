export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center text-center min-h-screen bg-[var-(--background)] text-black px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-20">
                Bridging Education for Every Student 🌍
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mb-8 text-black">
                EduBridge connects rural learners with peers and mentors — enabling offline-first, gamified, and local-language learning.
            </p>
            <a
                href="#join"
                className="bg-[#D7F7FF] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#A7F7FF] transition"
            >
                Get Started
            </a>
        </section>
    );
}
