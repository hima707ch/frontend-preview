import React from 'react';

export default function Hero() {
  return (
    <div id="Hero_1" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <div id="Hero_2" className="absolute top-20 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div id="Hero_3" className="absolute bottom-20 left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div id="Hero_4" className="absolute top-40 left-1/4 w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rotate-45"></div>
      <div id="Hero_5" className="container mx-auto px-6 py-32 relative z-10">
        <div id="Hero_6" className="flex flex-col items-center text-center space-y-8">
          <div id="Hero_7" className="animate-bounce bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full inline-block">
            <span id="Hero_8" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 font-semibold">Discover Your Dream Home</span>
          </div>
          <h1 id="Hero_9" className="text-6xl md:text-7xl font-bold">
            <span className="text-white">Find Your </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Perfect</span>
            <span className="text-white"> Property</span>
          </h1>
          <p id="Hero_10" className="text-gray-300 text-xl max-w-2xl">
            Explore thousands of properties across prime locations. Your journey to the perfect home starts here.
          </p>
          <div id="Hero_11" className="flex gap-6 mt-8">
            <button id="Hero_12" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-blue-500/50">
              Browse Properties
            </button>
            <button id="Hero_13" className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold hover:bg-white/20 transition-all duration-300">
              Learn More
            </button>
          </div>
          <div id="Hero_14" className="flex gap-8 mt-12">
            <div id="Hero_15" className="bg-white/5 backdrop-blur-sm p-4 rounded-xl">
              <h3 id="Hero_16" className="text-3xl font-bold text-white">1000+</h3>
              <p id="Hero_17" className="text-gray-400">Properties</p>
            </div>
            <div id="Hero_18" className="bg-white/5 backdrop-blur-sm p-4 rounded-xl">
              <h3 id="Hero_19" className="text-3xl font-bold text-white">500+</h3>
              <p id="Hero_20" className="text-gray-400">Happy Clients</p>
            </div>
            <div id="Hero_21" className="bg-white/5 backdrop-blur-sm p-4 rounded-xl">
              <h3 id="Hero_22" className="text-3xl font-bold text-white">50+</h3>
              <p id="Hero_23" className="text-gray-400">Cities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
