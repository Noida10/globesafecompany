import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold mb-4">
              Your Trusted Security Partner Since 2014
            </h2>
            <p className="text-gray-600 mb-4">
              Globe Safe Company has been at the forefront of security solutions
              in Ghaziabad and beyond. With over a decade of expertise, we
              specialize in manufacturing, exporting, and supplying premium
              safety lockers, security safes, and vault systems.
            </p>
            <p className="text-gray-600 mb-4">
              Our commitment to quality and innovation has made us the preferred
              choice for banks, businesses, and homeowners across India. Every
              product we create is designed with one goal in mind - protecting
              what matters most to you.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="text-3xl font-bold text-primary-600">10+</h4>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-primary-600">500+</h4>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-primary-600">50+</h4>
                <p className="text-gray-600">Product Variants</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-primary-600">24/7</h4>
                <p className="text-gray-600">Support Service</p>
              </div>
            </div>

            <Link href="/about" className="btn-primary inline-block">
              Learn More About Us
            </Link>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800"
                alt="Globe Safe Company Facility"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-primary-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      ISO Certified
                    </h4>
                    <p className="text-sm text-gray-600">
                      Quality Management System
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;