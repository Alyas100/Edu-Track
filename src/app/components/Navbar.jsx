export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-[#D7F7FF] shadow-sm z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
                <h1 className="text-2xl font-bold text-black">EduBridge</h1>

                <ul className="hidden md:flex gap-10 text-black list-none">
                    <li><a href="#hero" className="inline-block hover:text-black hover:scale-110">Home</a></li>
                    <li><a href="#features" className="inline-block hover:text-black hover:scale-110">Features</a></li>
                    <li><a href="#howitworks" className="inline-block hover:text-black hover:scale-110">How It Works</a></li>
                    <li><a href="#about" className="inline-block hover:text-black hover:scale-110">About</a></li>
                </ul>

                <ul className="flex gap-3 text-black list-none">
                    <li><a
                        href="#signup"
                        className="inline-block px-5 py-2 rounded-full text-black 
                               hover:bg-[#a8eeff]">
                        Sign up
                    </a>
                    </li>
                    <li>
                        <a href="#login" className="inline-block px-5 py-2 rounded-full text-black
                        hover:bg-[#a8eeff]">
                            Login
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
