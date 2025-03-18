import React from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/images';

const Hero = () => {
  return (
    <div id="Hero_1" className="relative bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Your Dream Property</h1>
            <p className="text-lg text-gray-600 mb-8">Discover the perfect property that matches your lifestyle and preferences.</p>
            <Link to="/properties" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              View Properties
            </Link>
          </div>
          <div className="md:w-1/2">
            <img src={images[0]} alt="Featured Property" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;