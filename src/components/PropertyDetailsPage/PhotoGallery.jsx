import React, { useState } from 'react';
import images from '../assets/images';

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div id="PhotoGallery_1" className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-black' : ''}`}>
      <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`Property view ${currentIndex + 1}`}
          className={`h-full w-full object-cover transition-transform duration-500 ${isFullscreen ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
          onClick={toggleFullscreen}
          id="PhotoGallery_2"
        />
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow-lg hover:bg-white"
          id="PhotoGallery_3"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow-lg hover:bg-white"
          id="PhotoGallery_4"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="mt-4 flex justify-center space-x-2" id="PhotoGallery_5">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-all ${currentIndex === index ? 'bg-blue-600 w-4' : 'bg-gray-300'}`}
            id={`PhotoGallery_6_${index}`}
          />
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2 px-4" id="PhotoGallery_7">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer overflow-hidden rounded-lg ${currentIndex === index ? 'ring-2 ring-blue-600' : ''}`}
            style={{ width: 'calc(20% - 8px)', aspectRatio: '1' }}
            id={`PhotoGallery_8_${index}`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="h-full w-full object-cover transition-transform hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;