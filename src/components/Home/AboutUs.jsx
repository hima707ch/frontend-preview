import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div id="AboutUs_1" className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div id="AboutUs_2" className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl font-bold text-white mb-4">About Our Dashboard Platform</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div id="AboutUs_3" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg transform hover:scale-105 transition duration-300" data-aos="fade-up">
            <div id="AboutUs_4" className="text-blue-500 text-4xl mb-4">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 id="AboutUs_5" className="text-xl font-semibold text-white mb-2">Real-time Monitoring</h3>
            <p className="text-gray-400">Track your orders and products in real-time with our advanced dashboard monitoring system.</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 shadow-lg transform hover:scale-105 transition duration-300" data-aos="fade-up" data-aos-delay="200">
            <div id="AboutUs_6" className="text-blue-500 text-4xl mb-4">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 id="AboutUs_7" className="text-xl font-semibold text-white mb-2">Inventory Management</h3>
            <p className="text-gray-400">Efficiently manage your product inventory with our comprehensive tracking system.</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 shadow-lg transform hover:scale-105 transition duration-300" data-aos="fade-up" data-aos-delay="400">
            <div id="AboutUs_8" className="text-blue-500 text-4xl mb-4">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 id="AboutUs_9" className="text-xl font-semibold text-white mb-2">Analytics & Reports</h3>
            <p className="text-gray-400">Get detailed insights with our powerful analytics and customizable reporting tools.</p>
          </div>
        </div>

        <div id="AboutUs_10" className="mt-16 text-center" data-aos="fade-up">
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Our dashboard solution provides businesses with powerful tools to manage orders and products efficiently. With real-time monitoring, advanced analytics, and user-friendly interface, we help you make informed decisions and grow your business.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;