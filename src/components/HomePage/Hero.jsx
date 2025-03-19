import React from 'react';
import images from '../assets/images';

export default function Hero() {
  return (
    <div id="Hero_1" className="relative h-[500px] bg-gray-900">
      <img 
        id="Hero_2"
        src={images[0] || 'https://example.com/placeholder.jpg'}
        alt="Luxury home"
        className="w-full h-full object-cover opacity-60"
      />
      <div id="Hero_3" className="absolute inset-0 flex items-center justify-center">
        <div id="Hero_4" className="text-center text-white">
          <h1 id="Hero_5" className="text-5xl font-bold mb-4">Find Your Dream Property</h1>
          <p id="Hero_6" className="text-xl">Discover the perfect place to call home</p>
        </div>
      </div>
    </div>
  );