import React, { useState } from 'react';
import images from '../assets/images';

const PropertyGallery = () => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div id="PropertyGallery_1" className="mb-8">
      <div id="PropertyGallery_2" className="aspect-w-16 aspect-h-9 mb-4">
        <img
          src={images[activeImage]}
          alt="Property"
          className="w-full h-[500px] object-cover rounded-lg"
        />
      </div>
      <div id="PropertyGallery_3" className="grid grid-cols-5 gap-4">
        {images.slice(0, 5).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`w-full h-24 object-cover rounded cursor-pointer ${activeImage === index ? 'ring-2 ring-blue-500' : ''}`}
            onClick={() => setActiveImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyGallery;