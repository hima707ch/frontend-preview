import React from 'react';
import images from '../assets/images';

const Hero = () => {
  return (
    <div className="relative h-[70vh]" id="Hero_1">
      <div className="absolute inset-0">
        <img src={images[0]} alt="Hero" className="w-full h-full object-cover" id="Hero_2" />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center" id="Hero_3">
        <div className="text-center text-white" id="Hero_4">
          <h1 className="text-5xl font-bold mb-4" id="Hero_5">Find Your Dream Property</h1>
          <p className="text-xl mb-8" id="Hero_6">Discover the perfect place to call home</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;