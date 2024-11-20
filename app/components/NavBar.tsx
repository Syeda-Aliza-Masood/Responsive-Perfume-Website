"use client";

function NavBar() {
    return (
        <nav className="bg-gray-800 text-white">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <a href="#home" className="hover:text-gray-300">Perfume Website</a>
                </div>

                {/* Links */}
                <ul className="hidden md:flex space-x-6">
                    <li><a href="#home" className="hover:text-gray-300">Home</a></li>
                    <li><a href="#sale" className="hover:text-gray-300">Sale</a></li>
                    <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
                </ul>

                {/* Mobile Menu Icon */}
                <button className="md:hidden block text-gray-300 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}

export default NavBar;
