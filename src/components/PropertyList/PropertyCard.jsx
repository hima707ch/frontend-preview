import React from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/images';

const PropertyCard = ({ property }) => {
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <div id="PropertyCard_1" className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <img id="PropertyCard_2" src={randomImage} alt={property.title} className="w-full h-48 object-cover" />
      <div id="PropertyCard_3" className="p-4">
        <h2 id="PropertyCard_4" className="text-xl font-semibold text-gray-800 mb-2">{property.title}</h2>
        <p id="PropertyCard_5" className="text-gray-600 mb-2 line-clamp-2">{property.description}</p>
        <div id="PropertyCard_6" className="flex justify-between items-center mt-4">
          <span id="PropertyCard_7" className="text-2xl font-bold text-blue-600">${property.price.toLocaleString()}</span>
          <Link
            to={`/property/${property.id}`}
            id="PropertyCard_8"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            View Details
          </Link>
        </div>
        <p id="PropertyCard_9" className="text-sm text-gray-500 mt-2">
          <span className="material-icons-outlined align-middle mr-1">location_on</span>
          {property.location}
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;