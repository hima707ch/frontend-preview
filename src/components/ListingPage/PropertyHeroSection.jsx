import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const PropertyHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [property, setProperty] = useState(null);

  useEffect(() => {
    fetch('/api/property/details')
      .then(res => res.json())
      .then(data => setProperty(data));
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div id="PropertyHeroSection_1" className="relative h-[80vh] w-full overflow-hidden bg-gradient-to-b from-gray-900/70 to-transparent">
      <div className="absolute inset-0">
        <img
          src={images[currentSlide]}
          alt="Property"
          className="w-full h-full object-cover transition-opacity duration-500"
        />
      </div>
      
      <div className="absolute inset-0 bg-black/30">
        <div className="container mx-auto px-4 h-full flex items-end pb-20">
          <div id="PropertyHeroSection_2" className="text-white space-y-6 max-w-2xl">
            <h1 className="text-5xl font-bold leading-tight">
              {property?.name || 'Luxury Beachfront Villa'}
            </h1>
            <div className="flex items-center space-x-6">
              <div id="PropertyHeroSection_3" className="flex items-center space-x-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span>{property?.location || 'Malibu, California'}</span>
              </div>
              <div id="PropertyHeroSection_4" className="flex items-center space-x-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>{property?.size || '5,200 sq ft'}</span>
              </div>
            </div>
            <div id="PropertyHeroSection_5" className="flex items-center space-x-8 text-lg">
              <div className="flex items-center space-x-2">
                <span className="font-semibold">4</span>
                <span>Bedrooms</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">3.5</span>
                <span>Bathrooms</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">2</span>
                <span>Garage</span>
              </div>
            </div>
            <div id="PropertyHeroSection_6" className="text-4xl font-bold text-green-400">
              ${property?.price?.toLocaleString() || '2,500,000'}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-3 transition-all duration-200"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-3 transition-all duration-200"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div id="PropertyHeroSection_7" className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${currentSlide === index ? 'bg-white w-4' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyHeroSection;