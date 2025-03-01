import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const PropertyComparison = () => {
  const [properties, setProperties] = useState([
    {
      id: 1,
      name: 'Luxury Villa',
      price: '$850,000',
      bedrooms: 4,
      bathrooms: 3,
      sqft: 3200,
      location: 'Beverly Hills',
      image: images[0]
    },
    {
      id: 2,
      name: 'Modern Apartment',
      price: '$450,000',
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1500,
      location: 'Downtown',
      image: images[1]
    },
    {
      id: 3,
      name: 'Beach House',
      price: '$950,000',
      bedrooms: 5,
      bathrooms: 4,
      sqft: 3800,
      location: 'Malibu',
      image: images[2]
    }
  ]);

  return (
    <div id="PropertyComparison_1" className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 id="PropertyComparison_2" className="text-3xl font-bold text-center mb-12 text-gray-800">Compare Properties</h2>
        
        <div id="PropertyComparison_3" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              id={`PropertyComparison_${property.id + 3}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-48">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {property.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{property.name}</h3>
                <p className="text-gray-600 mb-4">{property.location}</p>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-gray-50 p-2 rounded-lg">
                    <p className="text-sm text-gray-500">Beds</p>
                    <p className="font-semibold text-gray-800">{property.bedrooms}</p>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-lg">
                    <p className="text-sm text-gray-500">Baths</p>
                    <p className="font-semibold text-gray-800">{property.bathrooms}</p>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-lg">
                    <p className="text-sm text-gray-500">Sq.ft</p>
                    <p className="font-semibold text-gray-800">{property.sqft}</p>
                  </div>
                </div>
                
                <button className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div id="PropertyComparison_7" className="mt-12 text-center">
          <button className="bg-gray-800 text-white py-3 px-8 rounded-lg font-semibold hover:bg-gray-900 transition-colors duration-300">
            Load More Properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyComparison;