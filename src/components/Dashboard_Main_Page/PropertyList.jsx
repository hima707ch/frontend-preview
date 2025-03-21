import React from 'react';
import images from '../assets/images';

const PropertyList = ({ properties }) => {
  return (
    <div id="PropertyList_1" className="col-span-2 bg-white rounded-lg shadow p-6">
      <h2 id="PropertyList_2" className="text-xl font-semibold mb-4">Recent Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {properties.map((property, index) => (
          <div
            key={property.id}
            id={`PropertyList_${index + 3}`}
            className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <img
              src={images[index % images.length]}
              alt={property.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-medium mb-2">{property.title}</h3>
            <p className="text-gray-600 mb-2">{property.location}</p>
            <p className="text-indigo-600 font-bold">${property.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;