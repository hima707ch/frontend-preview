import React from 'react';

export default function Hero() {
  return (
    <div id="Hero_1" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <div id="Hero_2" className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div id="Hero_3" className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div id="Hero_4" className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-500 rotate-45 transform animate-float"></div>
      <div id="Hero_5" className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div id="Hero_6" className="max-w-4xl mx-auto text-center">
          <div id="Hero_7" className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold mb-6 animate-bounce">
            Find Your Dream Home Today
          </div>
          <h1 id="Hero_8" className="text-6xl font-bold mb-6">
            <span className="text-white">Discover Your</span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text"> Perfect Space</span>
          </h1>
          <p id="Hero_9" className="text-gray-300 text-xl mb-8">
            Explore thousands of properties and find the perfect place to call home
          </p>
          <div id="Hero_10" className="flex justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition duration-300">
              Browse Properties
            </button>
            <button className="px-8 py-4 bg-white text-gray-800 rounded-lg font-semibold hover:shadow-lg hover:bg-gray-50 transition duration-300">
              Contact Agent
            </button>
          </div>
          <div id="Hero_11" className="mt-12 flex justify-center gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 hover:bg-white/20 transition duration-300">
              <h3 className="text-2xl font-bold text-white">200+</h3>
              <p className="text-gray-300">Properties</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 hover:bg-white/20 transition duration-300">
              <h3 className="text-2xl font-bold text-white">50+</h3>
              <p className="text-gray-300">Locations</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 hover:bg-white/20 transition duration-300">
              <h3 className="text-2xl font-bold text-white">100+</h3>
              <p className="text-gray-300">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
