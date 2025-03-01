import React from 'react';
import images from '../assets/images';

const HeroBannerComponent = () => {
  return (
    <div id="HeroBannerComponent_1" className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src={images[0]}
          alt="Hero Background"
          className="w-full h-full object-cover"
          id="HeroBannerComponent_2"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" id="HeroBannerComponent_3"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-32 flex flex-col items-center justify-center min-h-screen text-center">
        <h1 id="HeroBannerComponent_4" className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Welcome to Our <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Amazing Platform</span>
        </h1>
        
        <p id="HeroBannerComponent_5" className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Discover the next generation of digital experiences. Join thousands of users who trust our platform.
        </p>
        
        <div id="HeroBannerComponent_6" className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
            Get Started
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300">
            Learn More
          </button>
        </div>
        
        <div id="HeroBannerComponent_7" className="mt-16 flex gap-8 justify-center">
          <div className="text-center text-white">
            <h3 className="text-4xl font-bold mb-2">10K+</h3>
            <p className="text-gray-300">Active Users</p>
          </div>
          <div className="text-center text-white">
            <h3 className="text-4xl font-bold mb-2">50+</h3>
            <p className="text-gray-300">Countries</p>
          </div>
          <div className="text-center text-white">
            <h3 className="text-4xl font-bold mb-2">99%</h3>
            <p className="text-gray-300">Satisfaction</p>
          </div>
        </div>
      </div>
      
      <div id="HeroBannerComponent_8" className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default HeroBannerComponent;