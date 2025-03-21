import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div id="About_1" className="bg-gradient-to-b from-gray-100 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 id="About_2" data-aos="fade-up" className="text-4xl font-bold text-center mb-8 text-gray-800">About ShopEase</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div id="About_3" data-aos="fade-right" className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Welcome to ShopEase, your premier destination for an exceptional online shopping experience. Since our establishment in 2020, we've been revolutionizing the way people shop online.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is to provide high-quality products, exceptional customer service, and a seamless shopping experience that exceeds our customers' expectations.
              </p>
              <div id="About_4" className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-indigo-600">50K+</h3>
                  <p className="text-gray-600">Happy Customers</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-indigo-600">10K+</h3>
                  <p className="text-gray-600">Products</p>
                </div>
              </div>
            </div>
            <div id="About_5" data-aos="fade-left" className="relative">
              <div className="bg-indigo-100 rounded-2xl p-8">
                <img
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3"
                  alt="Shopping Experience"
                  className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white p-6 rounded-lg shadow-xl">
                  <p className="text-xl font-semibold">Trusted by</p>
                  <p className="text-3xl font-bold">1M+ Users</p>
                </div>
              </div>
            </div>
          </div>
          <div id="About_6" data-aos="fade-up" className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-indigo-600 text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick and reliable shipping to your doorstep</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-indigo-600 text-4xl mb-4">💎</div>
              <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
              <p className="text-gray-600">Curated selection of premium items</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-indigo-600 text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Always here to help you</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
