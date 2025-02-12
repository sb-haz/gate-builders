import Link from "next/link";
import Image from "next/image"
import { Phone, MapPin, Clock, ChevronRight, Star } from 'lucide-react';

export default function Home() {
  const testimonials = [
    {
      name: "Didur Miah",
      role: "Homeowner",
      image: "men_7.jpg",
      text: "Gate Builders provided excellent service for my home extension. Their expertise and quality materials made all the difference."
    },
    {
      name: "Fahima Begum",
      role: "Property Developer",
      image: "women_13.jpg",
      text: "As a property developer, I rely on consistent quality and service. Gate Builders delivers every time."
    },
    {
      name: "Mozomul Rahman",
      role: "Contractor",
      image: "men_48.jpg",
      text: "The best builders merchant in West Midlands. Great prices and always helpful staff."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      < div className="relative h-[80vh]" >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/70 z-10"></div>
        <Image
          src="/background.png"
          alt="Construction site"
          className="absolute inset-0 object-cover"
          fill
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 max-w-3xl">
            Building Excellence, Delivering Quality
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            West Midlands premier builders and builders merchant, providing expert solutions for all your construction needs
          </p>
          <div className="flex gap-4">
            <Link
              href="/contact-us"
              className="bg-[#f3bf14] text-gray-900 px-8 py-4 rounded-md font-semibold hover:bg-[#f3bf14]/90 transition-colors duration-200"
            >
              Get a Quote
            </Link>
            <Link
              href="#products"
              className="bg-white text-gray-900 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              View Products
            </Link>
          </div>
        </div>
      </div >

      {/* Info Banner */}
      < div className="bg-[#f3bf14]" >
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { Icon: Clock, text: "Mon-Sat: 7:30AM - 5:00PM" },
              { Icon: Phone, text: "0121 552 3233", href: "tel:01215523233" },
              { Icon: MapPin, text: "90 Rood End Rd, Oldbury" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <item.Icon className="w-6 h-6 text-gray-900" />
                {item.href ? (
                  <a href={item.href} className="font-medium text-gray-900 hover:text-gray-800">
                    {item.text}
                  </a>
                ) : (
                  <span className="font-medium text-gray-900">{item.text}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div >

      {/* Services Section */}
      < div id="services" className="py-24 bg-white" >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Building & Extensions",
                desc: "Expert construction services for residential and commercial projects",
                img: "service_1.png"
              },
              {
                title: "Brick Laying",
                desc: "Professional brick laying services with attention to detail",
                img: "service_2.png"
              },
              {
                title: "Plumbing Services",
                desc: "Comprehensive plumbing solutions for any requirement",
                img: "service_3.png"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200">
                <Image
                  src={`/${service.img}`}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                  width={400}
                  height={200}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.desc}</p>
                  <Link
                    href="/contact-us"
                    className="text-[#f3bf14] hover:text-[#f3bf14]/80 inline-flex items-center font-medium transition-colors duration-200"
                  >
                    Enquire <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div >

      {/* Featured Products */}
      < div id="products" className="py-24 bg-gray-50" >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Featured Products</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Building Materials", img: "products_1.jpg" },
              { name: "Plumbing Supplies", img: "products_2.png" },
              { name: "Tools & Equipment", img: "products_3.jpg" },
              { name: "Landscaping", img: "products_4.jpg" }
            ].map((product, index) => (
              <div key={index} className="group">
                <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={`/${product.img}`}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    fill
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{product.name}</h3>
                <Link
                  href="/contact-us"
                  className="text-[#f3bf14] hover:text-[#f3bf14]/80 inline-flex items-center font-medium transition-colors duration-200"
                >
                  Enquire <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div >

      {/* Testimonials */}
      < div className="py-24 bg-white" >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#f3bf14] text-[#f3bf14]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">{testimonial.text}</p>
                <div className="flex items-center">
                  <Image
                    src={`/${testimonial.image}`}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                    width={48}
                    height={48}
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div >
    </div >
  );
}