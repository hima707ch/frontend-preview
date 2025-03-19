import React from 'react';
import { Link } from 'react-router-dom';

export default function PropertyList({ properties }) {
  return (
    <div id="PropertyList_1" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <div 
          key={property.id}
          id={`PropertyList_${property.id}`}
          className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
        >
          <img
            src={property.image || images[0]}
            alt={property.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
            <p className="text-gray-600 mb-2">{property.location}</p>
            <p className="text-green-600 font-bold">${property.price.toLocaleString()}</p>
            <Link
              to={`/property/${property.id}`}
              className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );