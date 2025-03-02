import React from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/images';

const PropertyCard = ({ property = {
  id: 1,
  title: 'Modern Luxury Villa',
  price: '$850,000',
  location: 'Beverly Hills, CA',
  beds: 4,
  baths: 3,
  area: '2,500',
  image: images[0] || 'https://source.unsplash.com/random/400x300/?luxury,house'
} }) => {
  return (
    <div id="PropertyCard_1" className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
      <div id="PropertyCard_2" className="relative">
        <img
          id="PropertyCard_3"
          className="w-full h-48 object-cover"
          src={property.image}
          alt={property.title}
        />
        <div id="PropertyCard_4" className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {property.price}
        </div>
      </div>
      
      <div id="PropertyCard_5" className="p-6">
        <h3 id="PropertyCard_6" className="text-xl font-bold text-gray-800 mb-2">{property.title}</h3>
        
        <div id="PropertyCard_7" className="flex items-center mb-4">
          <svg id="PropertyCard_8" className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span id="PropertyCard_9" className="text-gray-600">{property.location}</span>
        </div>
        
        <div id="PropertyCard_10" className="flex justify-between mb-6">
          <div id="PropertyCard_11" className="flex items-center">
            <svg id="PropertyCard_12" className="w-5 h-5 text-gray-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span id="PropertyCard_13" className="text-gray-600">{property.beds} beds</span>
          </div>
          
          <div id="PropertyCard_14" className="flex items-center">
            <svg id="PropertyCard_15" className="w-5 h-5 text-gray-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span id="PropertyCard_16" className="text-gray-600">{property.baths} baths</span>
          </div>
          
          <div id="PropertyCard_17" className="flex items-center">
            <svg id="PropertyCard_18" className="w-5 h-5 text-gray-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            <span id="PropertyCard_19" className="text-gray-600">{property.area} sq ft</span>
          </div>
        </div>
        
        <Link
          id="PropertyCard_20"
          to={`/property/${property.id}`}
          className="block w-full text-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;