import React from 'react';
import images from '../assets/images';

const PropertyList = ({ properties }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="PropertyList_1">
      {properties.map((property, index) => (
        <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden" id={`PropertyList_${index + 2}`}>
          <img
            src={images[index % images.length]}
            alt={property.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
            <p className="text-gray-600 mb-2">{property.location}</p>
            <div className="flex justify-between items-center mb-2">
              <span className="text-blue-600 font-bold">${property.price.toLocaleString()}</span>
              <span className="text-gray-500">{property.type}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>{property.bedrooms} beds</span>
              <span>{property.bathrooms} baths</span>
              <span>{property.area} sqft</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;