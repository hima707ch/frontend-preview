import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div id="About_1" className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center" data-aos="fade-up">
          <h2 id="About_2" className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div id="About_3" className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div id="About_4" className="space-y-6" data-aos="fade-right">
            <h3 id="About_5" className="text-2xl font-semibold text-blue-400">Who I Am</h3>
            <p id="About_6" className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate web developer with a keen eye for creating beautiful and functional websites. With years of experience in frontend development, I specialize in building responsive and user-friendly web applications.
            </p>
            <div id="About_7" className="space-y-4">
              <div className="flex items-center">
                <span className="text-blue-400 mr-2">⚡</span>
                <p id="About_8" className="text-gray-300">3+ Years of Experience in Web Development</p>
              </div>
              <div className="flex items-center">
                <span className="text-blue-400 mr-2">⚡</span>
                <p id="About_9" className="text-gray-300">Specialized in React and Modern Frontend Technologies</p>
              </div>
              <div className="flex items-center">
                <span className="text-blue-400 mr-2">⚡</span>
                <p id="About_10" className="text-gray-300">Committed to Clean and Efficient Code</p>
              </div>
            </div>
          </div>

          <div id="About_11" className="relative" data-aos="fade-left">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-1">
              <div className="bg-gray-900 rounded-lg p-6">
                <div id="About_12" className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 hover:bg-gray-800 rounded-lg transition duration-300">
                    <h4 id="About_13" className="text-3xl font-bold text-blue-400">50+</h4>
                    <p id="About_14" className="text-gray-300">Projects Completed</p>
                  </div>
                  <div className="text-center p-4 hover:bg-gray-800 rounded-lg transition duration-300">
                    <h4 id="About_15" className="text-3xl font-bold text-blue-400">30+</h4>
                    <p id="About_16" className="text-gray-300">Happy Clients</p>
                  </div>
                  <div className="text-center p-4 hover:bg-gray-800 rounded-lg transition duration-300">
                    <h4 id="About_17" className="text-3xl font-bold text-blue-400">99%</h4>
                    <p id="About_18" className="text-gray-300">Success Rate</p>
                  </div>
                  <div className="text-center p-4 hover:bg-gray-800 rounded-lg transition duration-300">
                    <h4 id="About_19" className="text-3xl font-bold text-blue-400">24/7</h4>
                    <p id="About_20" className="text-gray-300">Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;