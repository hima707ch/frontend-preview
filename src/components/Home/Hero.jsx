import React from 'react';

const Hero = () => {
  return (
    <div id="Hero_1" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center overflow-hidden">
      <div id="Hero_2" className="absolute top-20 left-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse"></div>
      <div id="Hero_3" className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div id="Hero_4" className="absolute top-1/3 right-1/4 w-24 h-24 bg-yellow-500/20 rotate-45 animate-spin-slow"></div>
      
      <div id="Hero_5" className="container mx-auto px-4 z-10">
        <div id="Hero_6" className="text-center">
          <div id="Hero_7" className="flex items-center justify-center gap-4 mb-6">
            <span id="Hero_8" className="px-4 py-2 bg-white/10 rounded-full text-white backdrop-blur-sm animate-bounce">Full Stack Developer</span>
            <span id="Hero_9" className="px-4 py-2 bg-white/10 rounded-full text-white backdrop-blur-sm animate-bounce delay-100">UI/UX Designer</span>
          </div>
          
          <h1 id="Hero_10" className="text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Hello, I'm John Doe</span>
          </h1>
          
          <p id="Hero_11" className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
            Crafting digital experiences through elegant code and creative design solutions. Turning ideas into reality with modern web technologies.
          </p>
          
          <div id="Hero_12" className="flex items-center justify-center gap-6">
            <button id="Hero_13" className="px-8 py-3 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/30">
              View My Work
            </button>
            <button id="Hero_14" className="px-8 py-3 border-2 border-white/30 rounded-full text-white font-semibold hover:bg-white/10 transition-colors duration-300">
              Contact Me
            </button>
          </div>
        </div>
      </div>
      
      <div id="Hero_15" className="absolute bottom-10 animate-bounce text-white/50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;