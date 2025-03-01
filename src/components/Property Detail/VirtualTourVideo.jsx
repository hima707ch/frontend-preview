import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const VirtualTourVideo = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const tourVideos = [
    'https://sample-videos.com/video1.mp4',
    'https://sample-videos.com/video2.mp4',
    'https://sample-videos.com/video3.mp4'
  ];

  const handleNextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % tourVideos.length);
  };

  const handlePrevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + tourVideos.length) % tourVideos.length);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div id="VirtualTourVideo_1" className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 id="VirtualTourVideo_2" className="text-4xl font-bold text-center text-white mb-8 animate-fade-in">
          Virtual Property Tour
        </h2>
        <div id="VirtualTourVideo_3" className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
          <video
            id="VirtualTourVideo_4"
            src={tourVideos[currentVideoIndex]}
            className="w-full h-full object-cover"
            autoPlay={isPlaying}
            loop
            muted
          />
          <div id="VirtualTourVideo_5" className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 flex justify-between items-center">
            <button
              onClick={handlePrevVideo}
              className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all duration-300 text-white"
            >
              ← Previous
            </button>
            <button
              onClick={togglePlay}
              className="px-6 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all duration-300 text-white"
            >
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            <button
              onClick={handleNextVideo}
              className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all duration-300 text-white"
            >
              Next →
            </button>
          </div>
        </div>
        <div id="VirtualTourVideo_6" className="mt-8 grid grid-cols-3 gap-4">
          {tourVideos.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentVideoIndex(index)}
              className={`cursor-pointer rounded-lg overflow-hidden border-4 ${currentVideoIndex === index ? 'border-blue-500' : 'border-transparent'}`}
            >
              <video
                src={tourVideos[index]}
                className="w-full h-32 object-cover"
                muted
              />
            </div>
          ))}
        </div>
        <div id="VirtualTourVideo_7" className="mt-12 text-center text-white">
          <h3 className="text-2xl font-semibold mb-4">Experience the Property Like Never Before</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Take an immersive virtual tour of our properties from the comfort of your home. Navigate through different rooms and spaces with our interactive video player.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VirtualTourVideo;