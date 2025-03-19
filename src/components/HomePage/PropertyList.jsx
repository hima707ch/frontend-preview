import React from 'react';
import images from '../assets/images';

const PropertyList = ({ properties, onPropertyClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="PropertyList_1">
      {properties.map((property) => (
        <div 
          key={property.id} 
          className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-200"
          onClick={() => onPropertyClick(property.id)}
          id={`PropertyList_${property.id}`}
        >
          <img 
            src={images[Math.floor(Math.random() * images.length)]} 
            alt={property.title} 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
            <p className="text-gray-600 mb-2">{property.location}</p>
            <p className="text-gray-800 font-bold">${property.price.toLocaleString()}</p>
            <p className="text-gray-500 mt-2 line-clamp-2">{property.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;