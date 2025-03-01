import React from 'react';
import images from '../assets/images';

const AboutUsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 id="AboutUsSection_1" className="text-4xl font-bold text-gray-900 leading-tight">
              Crafting Digital Excellence
            </h2>
            <p id="AboutUsSection_2" className="text-lg text-gray-600">
              With over a decade of experience in digital innovation, we've been at the forefront of creating exceptional web solutions that drive business growth and user engagement.
            </p>
            <div id="AboutUsSection_3" className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-500 p-2 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Innovative Solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-500 p-2 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Expert Team</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-500 p-2 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">24/7 Support</span>
              </div>
            </div>
            <button id="AboutUsSection_4" className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
              Learn More About Us
            </button>
          </div>
          <div className="relative">
            <div id="AboutUsSection_5" className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300">
              <img
                src={images[0] || 'https://example.com/about-us-image.jpg'}
                alt="About Us"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-white p-3 rounded-full">
                    <span className="text-blue-600 font-bold">10+</span>
                  </div>
                  <div className="text-white">
                    <p className="font-semibold">Years of Excellence</p>
                    <p className="text-sm opacity-80">Serving Global Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="AboutUsSection_6" className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">To empower businesses with innovative digital solutions that drive growth and success in the modern world.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">To be the leading force in digital transformation, setting new standards in technology and creativity.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-600">Innovation, integrity, and excellence are the core values that drive every aspect of our work.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;