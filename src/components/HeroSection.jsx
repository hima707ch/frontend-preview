import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const HeroSection = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('/properties')
      .then((response) => response.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error('Error fetching properties:', error));
  }, []);

  return (
    <section
      id="HeroSection_1"
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${images[Math.floor(Math.random() * images.length)]})` }}
    >
      <div
        id="HeroSection_2"
        className="absolute inset-0 bg-black opacity-40"
      ></div>
      <div
        id="HeroSection_3"
        className="relative z-10 text-center text-white max-w-3xl mx-auto"
      >
        <h1
          id="HeroSection_4"
          className="text-5xl font-bold mb-4"
        >
          Find Your Dream Home with Us
        </h1>
        <p
          id="HeroSection_5"
          className="text-xl mb-8"
        >
          Browse through luxury homes, apartments, and commercial properties.
        </p>
        <div
          id="HeroSection_6"
          className="flex justify-center space-x-4"
        >
          <button
            id="HeroSection_7"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
            onClick={() => console.log(properties)}
          >
            Browse Listings
          </button>
          <button
            id="HeroSection_8"
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
