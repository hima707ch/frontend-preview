import React from 'react';

export default function PropertyList({ properties }) {
  return (
    <div id="PropertyList_1">
      <h2 id="PropertyList_2" className="text-3xl font-semibold mb-8 text-center">Featured Properties</h2>
      <div id="PropertyList_3" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <div key={property.id} id={`PropertyList_${property.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <img
              src={property.image || images[1] || 'https://via.placeholder.com/400x300'}
              alt={property.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
              <p className="text-gray-600 mb-4">{property.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">${property.price}</span>
                <span className="text-gray-500">{property.location}</span>
              </div>
              <button 
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                onClick={() => window.location.href = `/property/${property.id}`}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );