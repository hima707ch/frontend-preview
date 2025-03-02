import React, { useState, useEffect } from 'react';
import axios from 'axios';
import images from '../assets/images';

const ImageGallery = ({ propertyId }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [propertyImages, setPropertyImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}`);
        setPropertyImages(response.data.images || images);
      } catch (error) {
        setPropertyImages(images);
      }
    };
    fetchImages();
  }, [propertyId]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % propertyImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + propertyImages.length) % propertyImages.length);
  };

  return (
    <div id="ImageGallery_1" className="w-full max-w-6xl mx-auto p-4">
      <div className="relative">
        <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-black' : 'h-[500px]'}`}>
          <img
            id="ImageGallery_2"
            src={propertyImages[currentImageIndex]}
            alt={`Property image ${currentImageIndex + 1}`}
            className={`w-full h-full object-cover rounded-lg ${isFullscreen ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
            onClick={() => setIsFullscreen(!isFullscreen)}
          />
          <button
            id="ImageGallery_3"
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
          >
            ←
          </button>
          <button
            id="ImageGallery_4"
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
          >
            →
          </button>
        </div>

        <div id="ImageGallery_5" className="flex overflow-x-auto gap-2 mt-4 pb-2">
          {propertyImages.map((image, index) => (
            <div
              key={index}
              id={`ImageGallery_thumbnail_${index}`}
              className={`flex-shrink-0 cursor-pointer transition-all duration-300 ${currentImageIndex === index ? 'ring-4 ring-blue-500' : 'hover:ring-2 ring-gray-300'}`}
              onClick={() => setCurrentImageIndex(index)}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-24 h-24 object-cover rounded-md"
              />
            </div>
          ))}
        </div>

        <div id="ImageGallery_6" className="mt-4 text-center text-gray-600">
          {currentImageIndex + 1} / {propertyImages.length}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;