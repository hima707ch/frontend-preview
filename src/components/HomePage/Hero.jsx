import React from 'react';
import images from '../assets/images';

const Hero = ({ user }) => {
  return (
    <div id="Hero_1" className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 id="Hero_2" className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Welcome{user ? `, ${user.username}` : ''} to</span>
                <span className="block text-blue-600">Your Dream Home</span>
              </h1>
              <p id="Hero_3" className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Discover the perfect property that matches your lifestyle. Browse through our extensive collection of premium properties.
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          id="Hero_4"
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={images[0] || 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6'}
          alt="Featured home"
        />
      </div>
    </div>
  );
};

export default Hero;