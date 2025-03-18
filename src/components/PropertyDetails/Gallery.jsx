import React, { useState } from 'react';
import images from '../assets/images';

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div id="Gallery_1" className="space-y-4">
      <div id="Gallery_2" className="relative h-96 overflow-hidden rounded-lg">
        <img
          src={images[activeImage]}
          alt="Property"
          className="w-full h-full object-cover"
        />
      </div>
      <div id="Gallery_3" className="grid grid-cols-4 gap-4">
        {images.slice(0, 4).map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            className={`h-24 rounded-lg overflow-hidden ${activeImage === index ? 'ring-2 ring-primary' : ''}`}
          >
            <img src={image} alt="Property thumbnail" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;