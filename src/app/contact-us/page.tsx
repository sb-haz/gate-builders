import Image from "next/image";
import { Phone, MapPin, Clock } from 'lucide-react';

export default function ContactUs() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[40vh]">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/70 z-10"></div>
                <Image
                    src="/contact-us.jpg"
                    alt="Contact Us"
                    className="absolute inset-0 object-cover"
                    fill
                />
                <div className="relative z-20 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
                    <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
                    <p className="text-xl text-white max-w-2xl">
                        Get in touch with our team for quotes, inquiries, support, or job applications
                    </p>
                </div>
            </div>

            {/* Contact Info Section */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                        <h2 className="text-2xl font-semibold mb-6 text-gray-900">Send us a message</h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#f3bf14] focus:border-[#f3bf14]"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#f3bf14] focus:border-[#f3bf14]"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#f3bf14] focus:border-[#f3bf14]"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#f3bf14] focus:border-[#f3bf14]"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#f3bf14] text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-[#f3bf14]/90 transition-colors duration-200"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Contact Information</h2>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Phone className="w-6 h-6 text-[#f3bf14]" />
                                    <a href="tel:01215523233" className="text-gray-700 hover:text-[#f3bf14]">
                                        0121 552 3233
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-6 h-6 text-[#f3bf14]" />
                                    <span className="text-gray-700">
                                        90 Rood End Rd, Oldbury, West Midlands
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock className="w-6 h-6 text-[#f3bf14]" />
                                    <span className="text-gray-700">Mon-Sat: 7:30AM - 5:00PM</span>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="h-[300px] bg-gray-200 rounded-lg">
                            <div className="w-full h-full rounded-lg overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2042.535109457416!2d-2.0005823011914243!3d52.497288733541616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487097e91011ed89%3A0x95bbb1fda4ddf1ba!2s90%20Rood%20End%20Rd%2C%20Oldbury%20B68%208SF!5e0!3m2!1sen!2suk!4v1739315481005!5m2!1sen!2suk"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}