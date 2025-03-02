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
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
        <div id="HeroSection_2" className="container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 id="HeroSection_3" className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
              Experience The Extraordinary
            </h1>
            <p id="HeroSection_4" className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-up delay-200">
              Discover a world of endless possibilities and unforgettable moments
            </p>
            <div id="HeroSection_5" className="flex gap-4 animate-fade-in-up delay-300">
              <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Get Started
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="HeroSection_6" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;