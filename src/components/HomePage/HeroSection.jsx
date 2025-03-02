import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="max-w-2xl" id="HeroSection_2">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
                Discover Your Dream Home
              </h1>
              <p className="text-xl text-gray-200 mb-8" id="HeroSection_3">
                Exclusive properties handpicked for the most discerning buyers. Experience luxury living at its finest.
              </p>
              <div className="flex gap-4" id="HeroSection_4">
                <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105">
                  View Properties
                </button>
                <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all transform hover:scale-105">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2" id="HeroSection_5">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${currentImageIndex === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;