import React from 'react';
import images from '../assets/images';

const PropertyList = ({ properties }) => {
  return (
    <div id="PropertyList_1" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <div key={property.id} id={`PropertyList_${property.id}`} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={images[0] || 'https://via.placeholder.com/300x200'}
            alt={property.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
            <p className="text-gray-600 mb-2">{property.description}</p>
            <p className="text-green-600 font-bold">${property.price}</p>
            <p className="text-gray-500">{property.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;