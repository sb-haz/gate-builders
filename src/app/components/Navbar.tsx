"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo.png"
                            alt="Gate Builders Logo"
                            className="h-16 w-auto"
                            width={150}
                            height={64}
                            priority
                        />
                    </Link>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <div className="space-y-1.5">
                            <span className="block w-6 h-0.5 bg-gray-800"></span>
                            <span className="block w-6 h-0.5 bg-gray-800"></span>
                            <span className="block w-6 h-0.5 bg-gray-800"></span>
                        </div>
                    </button>

                    {/* Desktop menu */}
                    <div className="hidden md:flex space-x-12">
                        <Link href="/#products" className="text-gray-800 font-medium hover:text-[#f3bf14] transition-colors duration-200">
                            Products
                        </Link>
                        <Link href="/#services" className="text-gray-800 font-medium hover:text-[#f3bf14] transition-colors duration-200">
                            Services
                        </Link>
                        <Link href="/careers" className="text-gray-800 font-medium hover:text-[#f3bf14] transition-colors duration-200">
                            Careers
                        </Link>
                        <Link href="/contact-us" className="text-gray-800 font-medium hover:text-[#f3bf14] transition-colors duration-200">
                            Contact
                        </Link>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4 pb-6`}>
                    <div className="flex flex-col space-y-4">
                        <Link href="/#products" className="text-gray-800 font-medium hover:text-[#f3bf14] transition-colors duration-200">
                            Products
                        </Link>
                        <Link href="/#services" className="text-gray-800 font-medium hover:text-[#f3bf14] transition-colors duration-200">
                            Services
                        </Link>
                        <Link href="/careers" className="text-gray-800 font-medium hover:text-[#f3bf14] transition-colors duration-200">
                            Careers
                        </Link>
                        <Link href="/contact-us" className="text-gray-800 font-medium hover:text-[#f3bf14] transition-colors duration-200">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}