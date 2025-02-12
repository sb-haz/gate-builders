import Link from "next/link";
import Image from "next/image";

export default function Footer() {

    return (
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
    );
}