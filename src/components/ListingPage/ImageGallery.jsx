import React, { useState, useEffect } from 'react';
import axios from 'axios';
import images from '../assets/images';

const ImageGallery = ({ propertyId }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [propertyImages, setPropertyImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`/api/property/${propertyId}`);
        setPropertyImages(response.data.images || images);
        setLoading(false);
      } catch (error) {
        setPropertyImages(images);
        setLoading(false);
      }
    };
    fetchImages();
  }, [propertyId]);

  if (loading) {
    return (
      <div id="ImageGallery_1" className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div id="ImageGallery_2" className="container mx-auto px-4 py-8">
      {selectedImage && (
        <div id="ImageGallery_3" className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full">
            <button
              id="ImageGallery_4"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl"
            >
              ×
            </button>
            <img
              id="ImageGallery_5"
              src={selectedImage}
              alt="Selected property"
              className="w-full h-auto max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
      
      <div id="ImageGallery_6" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {propertyImages.map((image, index) => (
          <div
            key={index}
            id={`ImageGallery_7_${index}`}
            className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            onClick={() => setSelectedImage(image)}
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={image}
                alt={`Property image ${index + 1}`}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white text-sm font-medium">
                Click to view full size
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;