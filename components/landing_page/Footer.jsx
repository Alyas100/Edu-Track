export default function Footer() {
    return (
        <footer className="bg-black text-white py-6 px-8 text-center">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Copyright */}
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} EduBridge. All rights reserved.
                </p>

                {/* Footer Links */}
                <div className="flex gap-6 text-sm text-gray-300">
                    <a href="#privacy" className="hover:text-[#A7F7FF] transition">
                        Privacy Policy
                    </a>
                    <span className="text-gray-500">|</span>
                    <a href="#terms" className="hover:text-[#A7F7FF] transition">
                        Terms
                    </a>
                    <span className="text-gray-500">|</span>
                    <a
                        href="https://github.com/your-repo-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#A7F7FF] transition"
                    >
                        GitHub Repo
                    </a>
                </div>
            </div>
        </footer>
    );
}
