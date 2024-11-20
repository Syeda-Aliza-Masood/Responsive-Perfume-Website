"use client";

function SaleSection() {
    const perfumes = [
        { id: 1, name: "Mystic Bloom", image: "1.jfif", originalPrice: "$120", salePrice: "$90" },
        { id: 2, name: "Golden Essence", image: "5.jpeg", originalPrice: "$150", salePrice: "$110" },
        { id: 3, name: "Oceanic Bliss", image: "2.jpg", originalPrice: "$100", salePrice: "$75" },
        { id: 4, name: "Rosewood Charm", image: "10.jpg", originalPrice: "$130", salePrice: "$95" },
        { id: 5, name: "Velvet Touch", image: "11.jfif", originalPrice: "$140", salePrice: "$100" },
        { id: 6, name: "Amber Glow", image: "12.jpg", originalPrice: "$160", salePrice: "$120" },
    ];

    return (
        <section className="py-16 bg-gradient-to-br from-pink-100 via-white to-purple-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Exclusive Sale</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {perfumes.map((perfume) => (
                        <div
                            key={perfume.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
                        >
                            {/* Centered Image */}
                            <div className="flex justify-center items-center h-56 bg-gray-200">
                                <img
                                    src={perfume.image}
                                    alt={perfume.name}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">{perfume.name}</h3>
                                <p className="text-gray-500 line-through">{perfume.originalPrice}</p>
                                <p className="text-2xl font-bold text-purple-600">{perfume.salePrice}</p>
                                <button className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-lg hover:bg-purple-600 transition-all">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SaleSection;
