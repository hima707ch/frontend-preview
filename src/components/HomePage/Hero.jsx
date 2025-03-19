import React from 'react';
import images from '../assets/images';

const Hero = () => {
  return (
    <div id="Hero_1" className="relative h-[500px] overflow-hidden">
      <div
        id="Hero_2"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${images[0]})` }}
      >
        <div id="Hero_3" className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      <div id="Hero_4" className="relative h-full flex items-center justify-center text-center">
        <div id="Hero_5" className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Find Your Dream Property
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto px-4">
            Discover the perfect property that matches your lifestyle and preferences
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
