import React from 'react';
import images from '../assets/images';

const PropertyList = ({ properties }) => {
  return (
    <div id="PropertyList_1" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property, index) => (
        <div key={property.id} id={`PropertyList_${index + 2}`} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img
            src={images[index % images.length]}
            alt={property.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{property.title}</h2>
            <p className="text-gray-600 mb-2">{property.location}</p>
            <p className="text-green-600 font-bold">${property.price.toLocaleString()}</p>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;