import React from 'react';

export default function Hero() {
  return (
    <div id="Hero_1" className="relative min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 overflow-hidden">
      <div id="Hero_2" className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full blur-xl animate-pulse"></div>
      <div id="Hero_3" className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-l from-indigo-400 to-blue-500 rounded-lg rotate-45 blur-xl"></div>
      
      <div id="Hero_4" className="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br from-yellow-200 to-pink-300 rounded-full opacity-20"></div>
      
      <div id="Hero_5" className="container mx-auto px-6 py-32 relative z-10">
        <div id="Hero_6" className="text-center">
          <h1 id="Hero_7" className="text-6xl font-bold mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Discover</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-indigo-600"> Your Style</span>
          </h1>
          
          <p id="Hero_8" className="text-gray-600 text-xl mb-12 max-w-2xl mx-auto">Explore our curated collection of premium products. Find the perfect items that match your unique taste and lifestyle.</p>
          
          <div id="Hero_9" className="flex justify-center gap-6">
            <button id="Hero_10" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">Shop Now</button>
            <button id="Hero_11" className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-colors duration-300">Learn More</button>
          </div>
        </div>
        
        <div id="Hero_12" className="absolute top-10 left-10 animate-bounce">
          <div id="Hero_13" className="bg-white rounded-full shadow-lg px-4 py-2">
            <span className="text-purple-600 font-semibold">🔥 Hot Deals</span>
          </div>
        </div>
        
        <div id="Hero_14" className="absolute bottom-10 right-10 animate-bounce delay-100">
          <div id="Hero_15" className="bg-white rounded-full shadow-lg px-4 py-2">
            <span className="text-pink-600 font-semibold">🎁 Free Shipping</span>
          </div>
        </div>
      </div>
    </div>
  );
}
