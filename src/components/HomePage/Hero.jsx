import React from 'react';
import images from '../assets/images';

const Hero = () => {
  return (
    <div className="relative h-[70vh]" id="Hero_1">
      <div className="absolute inset-0">
        <img src={images[0]} alt="Hero" className="w-full h-full object-cover" id="Hero_2" />
        <div className="absolute inset-0 bg-black opacity-50" id="Hero_3"></div>
      </div>
      <div className="relative h-full flex items-center justify-center text-center" id="Hero_4">
        <div className="text-white px-4">
          <h1 className="text-5xl font-bold mb-4" id="Hero_5">Find Your Dream Home</h1>
          <p className="text-xl mb-8" id="Hero_6">Discover the perfect property that matches your lifestyle</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;