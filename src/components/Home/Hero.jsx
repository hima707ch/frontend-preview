import React from 'react';

export default function Hero() {
  return (
    <div id="Hero_1" className="relative min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 overflow-hidden">
      <div id="Hero_2" className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-xl opacity-40 animate-pulse"></div>
      <div id="Hero_3" className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-200 rounded-full blur-xl opacity-40"></div>
      <div id="Hero_4" className="absolute top-40 right-20 w-24 h-24 bg-purple-200 rotate-45 blur-lg opacity-40"></div>
      
      <div id="Hero_5" className="container mx-auto px-6 py-32 relative z-10">
        <div id="Hero_6" className="absolute -top-4 left-1/4 bg-blue-500 text-white px-4 py-1 rounded-full shadow-lg transform -rotate-6 animate-bounce">
          Trusted by 10k+ Clients
        </div>
        <div id="Hero_7" className="absolute top-20 right-1/4 bg-green-500 text-white px-4 py-1 rounded-full shadow-lg transform rotate-6">
          Premium Properties
        </div>
        
        <div id="Hero_8" className="max-w-4xl mx-auto text-center">
          <h1 id="Hero_9" className="text-6xl font-bold mb-6">
            <span className="text-blue-600">Find</span> Your 
            <span className="text-indigo-600">Dream</span> Home
            <span className="text-purple-600"> Today</span>
          </h1>
          <p id="Hero_10" className="text-xl text-gray-600 mb-8">
            Discover the perfect property that matches your lifestyle. From luxury apartments to cozy homes, we have everything you need.
          </p>
          
          <div id="Hero_11" className="flex justify-center gap-4">
            <button id="Hero_12" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transform transition hover:-translate-y-1">
              Browse Properties
            </button>
            <button id="Hero_13" className="px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 rounded-lg shadow-lg transform transition hover:-translate-y-1 border border-blue-600">
              Contact Agent
            </button>
          </div>
          
          <div id="Hero_14" className="mt-16 flex justify-center items-center gap-8">
            <div id="Hero_15" className="bg-white p-4 rounded-lg shadow-lg">
              <h3 id="Hero_16" className="text-2xl font-bold text-blue-600">1000+</h3>
              <p id="Hero_17" className="text-gray-600">Properties</p>
            </div>
            <div id="Hero_18" className="bg-white p-4 rounded-lg shadow-lg">
              <h3 id="Hero_19" className="text-2xl font-bold text-indigo-600">500+</h3>
              <p id="Hero_20" className="text-gray-600">Happy Clients</p>
            </div>
            <div id="Hero_21" className="bg-white p-4 rounded-lg shadow-lg">
              <h3 id="Hero_22" className="text-2xl font-bold text-purple-600">50+</h3>
              <p id="Hero_23" className="text-gray-600">Cities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
