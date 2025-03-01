import React from 'react';
import images from '../assets/images';

const HeroSection = () => {
  return (
    <div id="HeroSection_1" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://source.unsplash.com/random/1920x1080')] bg-cover bg-center animate-pulse"></div>
      </div>
      <div id="HeroSection_2" className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div id="HeroSection_3" className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-down">
              Building Digital
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500"> Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Transform your ideas into reality with our cutting-edge solutions and innovative technology.
            </p>
            <div id="HeroSection_4" className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-violet-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/50 transform hover:-translate-y-1 transition-all duration-300">
                Get Started
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-900 transform hover:-translate-y-1 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div id="HeroSection_5" className="flex-1 relative">
            <div className="relative w-full h-[400px] md:h-[500px]">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-pink-500 to-violet-500 rounded-2xl transform rotate-6 opacity-20"></div>
              <div className="absolute top-0 right-0 w-full h-full">
                <img
                  src="https://source.unsplash.com/random/800x600"
                  alt="Hero Image"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="HeroSection_6" className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;