import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  return (
    <div id="PropertyCard_1" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        id="PropertyCard_2"
        src={property.image || images[0]}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div id="PropertyCard_3" className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{property.title}</h3>
        <p className="text-gray-600 mb-2">{property.location}</p>
        <div id="PropertyCard_4" className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">
            ${property.price.toLocaleString()}
          </span>
          <Link
            to={`/property/${property.id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
