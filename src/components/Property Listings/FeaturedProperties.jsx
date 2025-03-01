import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const FeaturedProperties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('api/featured-properties')
      .then(res => res.json())
      .then(data => setProperties(data))
      .catch(err => {
        // Fallback data
        setProperties([
          {
            id: 1,
            title: 'Luxury Villa',
            location: 'Beverly Hills, LA',
            price: '$5,200,000',
            beds: 5,
            baths: 4,
            sqft: 4500,
            image: images[0]
          },
          {
            id: 2,
            title: 'Modern Apartment',
            location: 'Manhattan, NY',
            price: '$2,800,000',
            beds: 3,
            baths: 2,
            sqft: 2200,
            image: images[1]
          },
          {
            id: 3,
            title: 'Seaside Mansion',
            location: 'Miami Beach, FL',
            price: '$7,500,000',
            beds: 6,
            baths: 5,
            sqft: 6000,
            image: images[2]
          }
        ]);
      });
  }, []);

  return (
    <div id="FeaturedProperties_1" className="container mx-auto px-4 py-16">
      <h2 id="FeaturedProperties_2" className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Featured Properties
      </h2>
      <div id="FeaturedProperties_3" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map(property => (
          <div
            key={property.id}
            id={`FeaturedProperties_${property.id + 3}`}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">
                {property.price}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{property.title}</h3>
              <p className="text-gray-600 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {property.location}
              </p>
              <div className="flex justify-between text-gray-600 border-t pt-4">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M7 3a1 1 0 011-1h4a1 1 0 011 1v3h4a1 1 0 011 1v9a1 1 0 01-1 1H3a1 1 0 01-1-1V7a1 1 0 011-1h4V3z" />
                  </svg>
                  {property.beds} Beds
                </span>
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011-1h8a1 1 0 011 1v3h3a1 1 0 011 1v9a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1h3V2zm1 3h8V3H6v2z" clipRule="evenodd" />
                  </svg>
                  {property.baths} Baths
                </span>
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  {property.sqft} sqft
                </span>
              </div>
              <button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;