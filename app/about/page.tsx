import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Globe Safe Company",
  description: "Learn about Globe Safe Company's journey, mission, and commitment to providing premium security solutions since 2014.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Quality Excellence",
      description: "We never compromise on quality. Every product undergoes rigorous testing to meet international standards.",
      icon: "🏆"
    },
    {
      title: "Customer First",
      description: "Your security is our priority. We provide personalized solutions tailored to your specific needs.",
      icon: "🤝"
    },
    {
      title: "Innovation",
      description: "Continuously improving our products with the latest technology and security features.",
      icon: "💡"
    },
    {
      title: "Trust & Reliability",
      description: "Building lasting relationships through transparent business practices and reliable service.",
      icon: "🛡️"
    }
  ];

  const timeline = [
    { year: "2014", event: "Globe Safe Company established in Ghaziabad" },
    { year: "2016", event: "Expanded product range to include fire-resistant safes" },
    { year: "2018", event: "Achieved ISO certification for quality management" },
    { year: "2020", event: "Launched digital security solutions" },
    { year: "2023", event: "Serving 500+ clients nationwide" },
    { year: "2024", event: "Introduced AI-powered security systems" }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-900 to-primary-700">
        <div className="container-custom text-white">
          <h1 className="text-5xl font-bold mb-6">About Globe Safe Company</h1>
          <p className="text-xl max-w-3xl">
            Your trusted partner in security solutions, protecting what matters most to businesses and families across India since 2014.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2014 by Mr. Firoz, Globe Safe Company began with a simple vision: 
                to provide uncompromising security solutions to protect what people value most. 
                Starting from a small workshop in Pilkhuwa, Ghaziabad, we have grown into one 
                of the region's most trusted names in security products.
              </p>
              <p className="text-gray-600 mb-4">
                Over the past decade, we've expanded our operations, diversified our product 
                range, and served hundreds of satisfied customers across various sectors including 
                banking, retail, hospitality, and residential.
              </p>
              <p className="text-gray-600">
                Today, Globe Safe Company stands as a testament to quality, innovation, and 
                customer trust. We continue to invest in research and development to bring 
                you the most advanced security solutions available in the market.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800"
                alt="Globe Safe Company Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-primary-50 border-2 border-primary-200">
              <div className="text-primary-600 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be the leading provider of innovative security solutions in India, 
                setting industry standards for quality, reliability, and customer service 
                while making advanced security accessible to all.
              </p>
            </div>
            <div className="card bg-secondary-50 border-2 border-secondary-200">
              <div className="text-secondary-600 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To design, manufacture, and deliver superior quality security products 
                that provide complete peace of mind to our customers, backed by exceptional 
                service and continuous innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            The principles that guide everything we do
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card text-center hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Our Journey</h2>
          <p className="section-subtitle">
            A decade of growth, innovation, and customer trust
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-300"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-center mb-8">
                  <div className="absolute left-8 w-4 h-4 bg-primary-600 rounded-full -translate-x-1/2"></div>
                  <div className="ml-20">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <span className="text-primary-600 font-bold">{item.year}</span>
                      <p className="text-gray-700 mt-1">{item.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="section-title">Leadership</h2>
          <div className="max-w-3xl mx-auto text-center">
            <div className="card">
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300"
                  alt="Mr. Firoz - Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Mr. Firoz</h3>
              <p className="text-primary-600 mb-4">Founder & CEO</p>
              <p className="text-gray-600">
                With over 15 years of experience in the security industry, Mr. Firoz 
                founded Globe Safe Company with a vision to provide world-class security 
                solutions. Under his leadership, the company has grown from a small 
                workshop to a trusted name serving clients nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Future?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust Globe Safe Company for their security needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary bg-white text-primary-900 hover:bg-gray-100">
              Get in Touch
            </a>
            <a href="/products" className="btn-outline border-white text-white hover:bg-white hover:text-primary-900">
              View Products
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}