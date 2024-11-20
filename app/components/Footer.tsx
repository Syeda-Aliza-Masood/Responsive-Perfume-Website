"use client";

function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-200 py-8">
            <div className="container mx-auto px-4">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6 mb-6">
                    {/* Logo and Tagline */}
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h1 className="text-2xl font-bold text-white">Perfume Haven</h1>
                        <p className="text-gray-400">Your go-to destination for luxurious fragrances.</p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="Facebook"
                        >
                            <i className="fab fa-facebook text-xl"></i>
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="Twitter"
                        >
                            <i className="fab fa-twitter text-xl"></i>
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="Instagram"
                        >
                            <i className="fab fa-instagram text-xl"></i>
                        </a>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Links */}
                    <div className="flex flex-wrap justify-center md:justify-start space-x-4 mb-4 md:mb-0">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            About Us
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            Shop
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            Terms of Service
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="text-gray-400 text-center md:text-right">
                        © 2024 Perfume Haven. All rights reserved.
                    </p>
                </div>

                {/* Additional Line */}
                <p className="text-gray-500 text-center mt-6">
                    Developed by Syeda Aliza Masood.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
