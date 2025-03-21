import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id="About_1" className="min-h-screen bg-gradient-to-b from-gray-100 to-white py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto">
        <div id="About_2" className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Dream Home Realty</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div id="About_3" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6">
            <h3 id="About_4" className="text-2xl font-semibold text-gray-900">Your Trusted Real Estate Partner</h3>
            <p id="About_5" className="text-gray-600 leading-relaxed">
              With over 15 years of experience in the real estate market, Dream Home Realty has been helping families find their perfect homes. Our dedication to excellence and customer satisfaction has made us one of the most trusted names in the industry.
            </p>
            <div id="About_6" className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-3xl font-bold text-blue-600">1500+</h4>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-3xl font-bold text-blue-600">2000+</h4>
                <p className="text-gray-600">Properties Sold</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            id="About_7"
            className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
                alt="Modern Office"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div id="About_8" className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-lg shadow-xl">
              <p className="text-2xl font-semibold">15+ Years</p>
              <p>of Excellence</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          id="About_9"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-blue-600 text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold mb-2">Quality Properties</h3>
            <p className="text-gray-600">We ensure all our listings meet the highest standards of quality and value.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-blue-600 text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
            <p className="text-gray-600">Our experienced agents provide personalized support throughout your journey.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-blue-600 text-4xl mb-4">💫</div>
            <h3 className="text-xl font-semibold mb-2">Trusted Service</h3>
            <p className="text-gray-600">Building lasting relationships through transparent and honest service.</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;