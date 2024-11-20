"use client";

function ContactSection() {
    return (
        <section id="contact" className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-purple-100v py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-black mb-8">Contact Us</h2>

                <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <form action="#" method="POST">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your full name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your email address"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Your message"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            ></textarea>
                        </div>

                        <div className="mt-6 text-center">
                            <button
                                type="submit"
                                className="bg-purple-500 text-white py-3 px-8 rounded-lg hover:bg-purple-600 transition-all"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
