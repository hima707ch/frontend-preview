import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <div className="relative">
        <img src={property.image} alt={property.title} className="w-full h-48 object-cover transition duration-500 ease-in-out transform hover:scale-110" />
        <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 rounded-bl-md text-sm font-semibold tracking-wider uppercase">For Sale</div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out">{property.title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{property.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-800 font-bold text-xl">${property.price.toLocaleString()}</span>
          <a href={`/properties/${property.id}`} className="bg-blue-500 text-white px-5 py-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;