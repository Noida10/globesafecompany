"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Premium Security Solutions",
      subtitle: "Protecting What Matters Most Since 2014",
      description: "Industry-leading safes and lockers trusted by over 500 businesses nationwide. ISO certified manufacturing with advanced fire-resistant technology.",
      image: "https://2.wlimg.com/product_images/bc-full/2021/5/8855636/double-door-safety-locker-1622201310-5839493.jpeg",
      cta: "Explore Products"
    },
    {
      title: "Bank-Grade Strong Room Doors",
      subtitle: "950kg Heavy-Duty Construction",
      description: "Engineered for financial institutions and high-security facilities. Maximum protection with advanced locking mechanisms and reinforced steel construction.",
      image: "https://2.wlimg.com/product_images/bc-full/2021/5/8855636/strong-room-door-1622201611-5839507.jpeg",
      cta: "View Strong Rooms"
    },
    {
      title: "Fire-Resistant Technology",
      subtitle: "2-Hour Fire Protection Certified",
      description: "Advanced safes withstanding temperatures up to 1000°C. Protect your valuable documents and assets from fire damage with our certified solutions.",
      image: "https://2.wlimg.com/product_images/bc-full/2021/5/8855636/fire-resisting-record-cabinet-1622201784-5839516.jpeg",
      cta: "Learn More"
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="min-h-[500px] lg:min-h-[600px] flex items-center py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <div className="space-y-4">
                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {slides[currentSlide].title}
                </h1>
                
                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-primary-600 font-medium">
                  {slides[currentSlide].subtitle}
                </p>
                
                {/* Description */}
                <p className="text-lg text-gray-600 leading-relaxed">
                  {slides[currentSlide].description}
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link 
                    href="/products" 
                    className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300"
                  >
                    {slides[currentSlide].cta}
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-300"
                  >
                    Get Free Quote
                  </Link>
                </div>
                
                {/* Trust Indicators */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                  <div>
                    <p className="text-3xl font-bold text-primary-600">10K+</p>
                    <p className="text-sm text-gray-600 mt-1">Products Delivered</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary-600">500+</p>
                    <p className="text-sm text-gray-600 mt-1">Happy Clients</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary-600">10+</p>
                    <p className="text-sm text-gray-600 mt-1">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image Content */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative h-[350px] lg:h-[450px] bg-white rounded-2xl shadow-xl overflow-hidden">
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-contain p-8"
                        priority={index === 0}
                        quality={90}
                      />
                    </div>
                  ))}
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-2 rounded-lg">
                    <p className="text-xs font-semibold uppercase tracking-wide">ISO Certified</p>
                  </div>
                </div>
                
                {/* Slide Indicators */}
                <div className="flex justify-center gap-2 mt-4">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all duration-500 ${
                        index === currentSlide
                          ? "w-8 bg-primary-600"
                          : "w-2 bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-primary-50 to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/2 bg-gradient-to-tr from-gray-100 to-transparent" />
    </section>
  );
};

export default Hero;