import React from 'react';
import images from '../assets/images';

export default function Hero() {
  return (
    <div id="Hero_1" className="relative h-[500px] overflow-hidden">
      <img 
        id="Hero_2"
        src={images[0] || 'https://via.placeholder.com/1920x500'}
        alt="Luxury home"
        className="w-full h-full object-cover"
      />
      <div id="Hero_3" className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div id="Hero_4" className="text-center text-white">
          <h1 id="Hero_5" className="text-5xl font-bold mb-4">Find Your Dream Property</h1>
          <p id="Hero_6" className="text-xl mb-8">Discover the perfect place to call home</p>
          <button id="Hero_7" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            Explore Properties
          </button>
        </div>
      </div>
    </div>
  );