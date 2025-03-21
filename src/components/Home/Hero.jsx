import React from 'react';

export default function Hero() {
  return (
    <div id="Hero_1" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <div id="Hero_2" className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div id="Hero_3" className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div id="Hero_4" className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rotate-45 transform-gpu animate-float"></div>
      <div id="Hero_5" className="container mx-auto px-6 py-32 relative z-10">
        <div id="Hero_6" className="flex flex-col items-center text-center space-y-8">
          <div id="Hero_7" className="inline-flex items-center bg-white/10 backdrop-blur-lg rounded-full px-6 py-2 space-x-2">
            <span id="Hero_8" className="animate-pulse h-2 w-2 bg-emerald-400 rounded-full"></span>
            <p id="Hero_9" className="text-emerald-400 font-medium">Available Properties Worldwide</p>
          </div>
          <h1 id="Hero_10" className="text-5xl md:text-7xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Find Your Dream</span>
            <br />
            <span className="text-white">Home Today</span>
          </h1>
          <p id="Hero_11" className="text-gray-300 text-xl max-w-2xl">
            Discover the perfect property from our extensive collection of premium real estate listings across the globe.
          </p>
          <div id="Hero_12" className="flex gap-4">
            <button id="Hero_13" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition duration-300 transform hover:-translate-y-1">
              Explore Properties
            </button>
            <button id="Hero_14" className="px-8 py-4 bg-white/10 backdrop-blur-lg rounded-full text-white font-semibold hover:bg-white/20 transition duration-300">
              Learn More
            </button>
          </div>
          <div id="Hero_15" className="absolute bottom-10 flex gap-8">
            <div id="Hero_16" className="bg-white/10 backdrop-blur-lg rounded-xl p-4 hover:bg-white/20 transition">
              <h3 id="Hero_17" className="text-3xl font-bold text-white">1000+</h3>
              <p id="Hero_18" className="text-gray-300">Properties</p>
            </div>
            <div id="Hero_19" className="bg-white/10 backdrop-blur-lg rounded-xl p-4 hover:bg-white/20 transition">
              <h3 id="Hero_20" className="text-3xl font-bold text-white">500+</h3>
              <p id="Hero_21" className="text-gray-300">Happy Clients</p>
            </div>
            <div id="Hero_22" className="bg-white/10 backdrop-blur-lg rounded-xl p-4 hover:bg-white/20 transition">
              <h3 id="Hero_23" className="text-3xl font-bold text-white">50+</h3>
              <p id="Hero_24" className="text-gray-300">Cities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
