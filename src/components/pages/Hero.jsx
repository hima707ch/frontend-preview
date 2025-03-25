import React from 'react';
import images from '../assets/images';

const Hero = () => {
  return (
    <div id="Hero_1" className="relative h-[70vh] overflow-hidden">
      <img 
        id="Hero_2"
        src={images[0]} 
        alt="Luxury Property" 
        className="w-full h-full object-cover"
      />
      <div id="Hero_3" className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div id="Hero_4" className="text-center text-white">
          <h1 id="Hero_5" className="text-5xl font-bold mb-4">Find Your Dream Home</h1>
          <p id="Hero_6" className="text-xl">Discover the perfect property that matches your lifestyle</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;