import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gate Builders & Plumbers Merchants | Building Supplies West Midlands",
  description: "Leading builders merchants in Oldbury providing building materials, plumbing supplies and construction services since 2015. Visit our West Midlands store.",
  keywords: "builders merchants, building supplies, plumbing supplies, construction materials, Oldbury, West Midlands",
  robots: "index, follow",
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navbar */}
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
              <div className="hidden md:flex space-x-12">
                <Link
                  href="/#products"
                  className="text-gray-800 font-medium hover:text-[#f3bf14] transition-colors duration-200 cursor-pointer"
                >
                  Products
                </Link>
                <Link
                  href="/#services"
                  className="text-gray-800 font-medium hover:text-[#f3bf14] transition-colors duration-200 cursor-pointer"
                >
                  Services
                </Link>
                <Link
                  href="/careers"
                  className="text-gray-800 font-medium hover:text-[#f3bf14] transition-colors duration-200"
                >
                  Careers
                </Link>
                <Link
                  href="/contact-us"
                  className="text-gray-800 font-medium hover:text-[#f3bf14] transition-colors duration-200"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav >

        {children}

        {/* Footer */}
        < footer className="bg-gray-900 text-white py-16" >
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-12">
              <div>
                <Image
                  src="/logo-footer.png"
                  alt="Gate Builders Logo"
                  className="h-16 w-auto mb-6"
                  width={150}
                  height={64}
                />
                <p className="text-gray-300">Your trusted partner in construction and building materials since 2015.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {["Products", "Services", "Contact", "Careers"].map((item) => (
                    <li key={item}>
                      <Link href={`/${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors duration-200">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>90 Rood End Rd</li>
                  <li>Oldbury, West Midlands</li>
                  <li>0121 552 3233</li>
                  <li>info@gatebuildersandmerchants.co.uk</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Monday: 8:00AM - 4:30PM</li>
                  <li>Tuesday: 8:00AM - 4:30PM</li>
                  <li>Wednesday: 8:00AM - 4:30PM</li>
                  <li>Thursday: 8:00AM - 4:30PM</li>
                  <li>Friday: 8:00AM - 4:30PM</li>
                  <li>Saturday: 8:00AM - 1:30PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>
          </div>
        </footer >
      </body>
    </html>
  );
}
