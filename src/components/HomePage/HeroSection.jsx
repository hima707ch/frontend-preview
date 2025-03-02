import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="HeroSection_1" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images[currentImageIndex]}
          alt="Luxury Property"
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
      </div>
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8">
        <h1 id="HeroSection_2" className="text-4xl md:text-6xl font-bold text-center mb-6 animate-fade-in">
          Find Your Dream Home
        </h1>
        <p id="HeroSection_3" className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
          Discover luxury properties in prime locations tailored to your lifestyle
        </p>
        
        <div id="HeroSection_4" className="w-full max-w-3xl bg-white/10 backdrop-blur-md rounded-lg p-4 mb-8">
          <div className="flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Enter location"
              className="flex-1 min-w-[200px] px-4 py-3 rounded-md bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="flex-1 min-w-[200px] px-4 py-3 rounded-md bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Property Type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
            </select>
            <button className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition-colors duration-300 transform hover:scale-105">
              Search Now
            </button>
          </div>
        </div>
        
        <div id="HeroSection_5" className="flex gap-4">
          <div className="text-center px-6 py-2 backdrop-blur-sm bg-white/10 rounded-lg">
            <p className="text-2xl font-bold">1000+</p>
            <p className="text-sm">Properties</p>
          </div>
          <div className="text-center px-6 py-2 backdrop-blur-sm bg-white/10 rounded-lg">
            <p className="text-2xl font-bold">500+</p>
            <p className="text-sm">Happy Clients</p>
          </div>
          <div className="text-center px-6 py-2 backdrop-blur-sm bg-white/10 rounded-lg">
            <p className="text-2xl font-bold">50+</p>
            <p className="text-sm">Cities</p>
          </div>
        </div>
      </div>
      
      <div id="HeroSection_6" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full ${currentImageIndex === index ? 'bg-white' : 'bg-white/50'} transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;