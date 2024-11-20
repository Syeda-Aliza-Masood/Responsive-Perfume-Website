"use client";

function HeroSection() {
    return (
        <section className="bg-gradient-to-br from-pink-100 via-white to-purple-100 min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                {/* Text Content */}
                <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                        Discover Your Signature Scent
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-6">
                        Indulge in the essence of luxury with our premium collection of perfumes crafted for every occasion.
                    </p>
                    <button className="bg-purple-500 text-white py-3 px-8 rounded-lg hover:bg-purple-600 transition-all">
                        Shop Now
                    </button>
                </div>

                {/* Image */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src="9.jpg"
                        alt="Perfume Bottle"
                        className="w-3/4 md:w-full rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;