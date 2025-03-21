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
    <div id="About_1" className="bg-gradient-to-b from 'gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 id="About_2" className="text-4xl font-extrabold text-gray-900 mb-4">About Dream Home Realty</h2>
          <div id="About_3" className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div id="About_4" className="relative" data-aos="fade-right">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
              alt="Modern Building"
              className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
            />
            <div id="About_5" className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-lg opacity-20"></div>
          </div>
          
          <div id="About_6" className="space-y-6" data-aos="fade-left">
            <h3 id="About_7" className="text-2xl font-bold text-gray-900">Your Trusted Real Estate Partner</h3>
            <p id="About_8" className="text-gray-600 leading-relaxed">
              With over 15 years of experience in the real estate market, Dream Home Realty has been helping families find their perfect homes. Our dedication to excellence and customer satisfaction has made us one of the most trusted names in the industry.
            </p>
            <ul id="About_9" className="space-y-4">
              <li className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">Professional and Experienced Team</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">Personalized Property Solutions</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">Exceptional Customer Service</span>
              </li>
            </ul>
            <button id="About_10" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;