import React from 'react';
import images from '../assets/images';

const PropertyList = ({ properties }) => {
  return (
    <div id="PropertyList_1" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property, index) => (
        <div key={property.id} id={`PropertyList_${index + 2}`} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
          <img
            src={images[index % images.length]}
            alt={property.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{property.title}</h3>
            <p className="text-gray-600 mb-2">{property.location}</p>
            <p className="text-green-600 font-bold">${property.price.toLocaleString()}</p>
            <p className="text-gray-500 mt-2 line-clamp-2">{property.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;