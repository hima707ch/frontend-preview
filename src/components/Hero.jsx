import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const Hero = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const response = await fetch('/properties');
      const data = await response.json();
      setProperties(data);
    };

    fetchProperties();
  }, []);

  return (
    <section
      id="Hero_1"
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${images[0]})` }}
    >
      <div
        id="Hero_2"
        className="absolute inset-0 bg-black opacity-40"
      ></div>
      <div
        id="Hero_3"
        className="relative z-10 text-center text-white max-w-3xl mx-auto"
      >
        <h1
          id="Hero_4"
          className="text-5xl font-bold mb-4 parallax"
          data-speed="-2"
        >
          Find Your Dream Home
        </h1>
        <p
          id="Hero_5"
          className="text-xl mb-8 parallax"
          data-speed="-1"
        >
          Explore top listings in premium locations
        </p>
        <div id="Hero_6" className="flex justify-center space-x-4">
          <button
            id="Hero_7"
            className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-blue-100 transition duration-300"
            onClick={() => console.log(properties)}
          >
            Browse Properties
          </button>
          <a
            id="Hero_8"
            href="#testimonials"
            className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
          >
            Read Testimonials
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
