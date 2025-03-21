import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div id="About_1" className="bg-gradient-to-b from-gray-100 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 id="About_2" className="text-4xl font-bold text-gray-900 mb-4">About Dream Home Realty</h2>
          <div id="About_3" className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div id="About_4" className="relative" data-aos="fade-right">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
              alt="Modern Building"
              className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
            />
            <div id="About_5" className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-600 rounded-lg opacity-20"></div>
          </div>

          <div id="About_6" className="space-y-6" data-aos="fade-left">
            <h3 id="About_7" className="text-2xl font-semibold text-gray-900">Your Trusted Real Estate Partner</h3>
            <p id="About_8" className="text-gray-600 leading-relaxed">
              With over 15 years of experience in the real estate market, Dream Home Realty has been helping families find their perfect homes. Our dedication to excellence and customer satisfaction has made us one of the most trusted names in the industry.
            </p>
            <div id="About_9" className="grid grid-cols-2 gap-6 mt-8">
              <div id="About_10" className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-3xl font-bold text-blue-600">500+</h4>
                <p className="text-gray-600">Properties Sold</p>
              </div>
              <div id="About_11" className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-3xl font-bold text-blue-600">1000+</h4>
                <p className="text-gray-600">Happy Clients</p>
              </div>
            </div>
            <button id="About_12" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2">
              Learn More
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;