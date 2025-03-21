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
    <div id="About_1" className="bg-gradient-to-b from-white to-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 id="About_2" className="text-4xl font-bold text-center mb-8 text-gray-800" data-aos="fade-up">About Premier Estates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div id="About_3" className="space-y-6" data-aos="fade-right">
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2005, Premier Estates has established itself as a leading force in the real estate industry, dedicated to transforming the way people buy, sell, and invest in properties.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of experienced professionals brings together decades of industry expertise, local market knowledge, and a passion for delivering exceptional service to our clients.
              </p>
              <div id="About_4" className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in">
                  <h3 className="text-3xl font-bold text-blue-600 mb-2">500+</h3>
                  <p className="text-gray-600">Properties Sold</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in" data-aos-delay="100">
                  <h3 className="text-3xl font-bold text-blue-600 mb-2">1000+</h3>
                  <p className="text-gray-600">Happy Clients</p>
                </div>
              </div>
            </div>
            <div id="About_5" className="relative" data-aos="fade-left">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
                alt="Modern Building"
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
              <div id="About_6" className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
                <p className="text-gray-600">To provide exceptional real estate services while maintaining the highest standards of integrity and professionalism.</p>
              </div>
            </div>
          </div>
          <div id="About_7" className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-blue-600 text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in every transaction and client interaction.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-blue-600 text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-4">Trust</h3>
              <p className="text-gray-600">Building lasting relationships through trust and transparency.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-blue-600 text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">Embracing new technologies to better serve our clients.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;