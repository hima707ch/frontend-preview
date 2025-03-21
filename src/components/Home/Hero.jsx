import React from 'react';

export default function Hero() {
  return (
    <div id="Hero_1" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div id="Hero_2" className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div id="Hero_3" className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div id="Hero_4" className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-500 rotate-45"></div>
      
      <div id="Hero_5" className="container mx-auto px-6 py-20 relative z-10">
        <div id="Hero_6" className="flex flex-col items-center justify-center text-center space-y-8">
          <div id="Hero_7" className="animate-float inline-flex items-center px-4 py-2 bg-gray-800 rounded-full mb-4">
            <span id="Hero_8" className="flex h-3 w-3 relative mr-2">
              <span id="Hero_9" className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span id="Hero_10" className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span id="Hero_11" className="text-gray-300">Dashboard Analytics</span>
          </div>
          
          <h1 id="Hero_12" className="text-6xl font-bold">
            <span id="Hero_13" className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Powerful</span>
            <span id="Hero_14" className="text-white"> Dashboard for</span>
            <br />
            <span id="Hero_15" className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Order & Product Management</span>
          </h1>
          
          <p id="Hero_16" className="text-gray-300 text-xl max-w-2xl">
            Monitor your business metrics, track orders, and manage products all in one place. Get real-time insights and make data-driven decisions.
          </p>
          
          <div id="Hero_17" className="flex space-x-4">
            <button id="Hero_18" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg">
              Get Started
            </button>
            <button id="Hero_19" className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg border border-gray-600 transform hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </div>
          
          <div id="Hero_20" className="flex items-center space-x-8 mt-12">
            <div id="Hero_21" className="flex items-center px-6 py-3 bg-gray-800/50 rounded-xl backdrop-blur-sm">
              <span id="Hero_22" className="text-3xl font-bold text-blue-400">1.2K+</span>
              <span id="Hero_23" className="ml-2 text-gray-400">Active Users</span>
            </div>
            <div id="Hero_24" className="flex items-center px-6 py-3 bg-gray-800/50 rounded-xl backdrop-blur-sm">
              <span id="Hero_25" className="text-3xl font-bold text-purple-400">10K+</span>
              <span id="Hero_26" className="ml-2 text-gray-400">Orders Processed</span>
            </div>
            <div id="Hero_27" className="flex items-center px-6 py-3 bg-gray-800/50 rounded-xl backdrop-blur-sm">
              <span id="Hero_28" className="text-3xl font-bold text-pink-400">5K+</span>
              <span id="Hero_29" className="ml-2 text-gray-400">Products Listed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
