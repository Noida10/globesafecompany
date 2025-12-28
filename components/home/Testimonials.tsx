"use client";

import { useState } from "react";
import Image from "next/image";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "Bank Manager, State Bank of India",
      content: "Globe Safe Company provided us with a comprehensive security solution for our branch. Their strong room door and vaults have exceeded our expectations in terms of quality and reliability.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      rating: 5
    },
    {
      name: "Priya Sharma",
      position: "Jewelry Store Owner",
      content: "We've been using Globe Safe's jewelry lockers for 3 years now. The quality is exceptional and their after-sales service is prompt and professional. Highly recommended!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      rating: 5
    },
    {
      name: "Amit Patel",
      position: "Homeowner",
      content: "Installed their fire-resistant safe at home last year. The peace of mind it provides knowing our important documents and valuables are protected is invaluable. Excellent product!",
      image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=150",
      rating: 5
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-gray-100 to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Trust built on quality, service, and reliability
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Quote Icon */}
            <div className="text-primary-200 mb-6">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Testimonial Content */}
            <p className="text-lg md:text-xl text-gray-700 mb-8 italic">
              "{testimonials[activeTestimonial].content}"
            </p>

            {/* Rating Stars */}
            <div className="flex space-x-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Author Info */}
            <div className="flex items-center space-x-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  {testimonials[activeTestimonial].name}
                </h4>
                <p className="text-gray-600">
                  {testimonials[activeTestimonial].position}
                </p>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? "bg-primary-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <p className="font-semibold text-gray-900">ISO Certified</p>
              <p className="text-sm text-gray-600">Quality Assured</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <p className="font-semibold text-gray-900">10+ Years</p>
              <p className="text-sm text-gray-600">Industry Experience</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <p className="font-semibold text-gray-900">500+ Clients</p>
              <p className="text-sm text-gray-600">Nationwide</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <p className="font-semibold text-gray-900">24/7 Support</p>
              <p className="text-sm text-gray-600">Always Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;