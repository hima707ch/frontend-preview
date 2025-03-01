import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const PropertyDescription = () => {
  const [property, setProperty] = useState({
    title: 'Luxury Beachfront Villa',
    price: '$2,500,000',
    location: 'Malibu, California',
    beds: 4,
    baths: 3.5,
    sqft: 3200,
    description: 'Experience luxury living at its finest in this stunning beachfront villa. Featuring panoramic ocean views, this modern masterpiece offers an open-concept living space, gourmet kitchen with high-end appliances, and a private infinity pool. The master suite includes a spa-like bathroom and private terrace.',
    amenities: [
      'Private Beach Access',
      'Infinity Pool',
      'Smart Home System',
      'Wine Cellar',
      'Home Theater',
      'Gourmet Kitchen'
    ]
  });

  return (
    <div id="PropertyDescription_1" className="max-w-7xl mx-auto p-8 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h1 id="PropertyDescription_2" className="text-4xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
            {property.title}
          </h1>
          <p id="PropertyDescription_3" className="text-3xl font-semibold text-blue-600">
            {property.price}
          </p>
          <div id="PropertyDescription_4" className="flex items-center space-x-2 text-gray-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>{property.location}</span>
          </div>
          <div id="PropertyDescription_5" className="flex space-x-8 text-gray-700">
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>{property.beds} Beds</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>{property.baths} Baths</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>{property.sqft} sqft</span>
            </div>
          </div>
          <p id="PropertyDescription_6" className="text-gray-700 leading-relaxed">
            {property.description}
          </p>
        </div>
        <div className="space-y-6">
          <div id="PropertyDescription_7" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Amenities</h2>
            <div className="grid grid-cols-2 gap-4">
              {property.amenities.map((amenity, index) => (
                <div key={index} id={`PropertyDescription_${8 + index}`} className="flex items-center space-x-2 text-gray-700">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
          <div id="PropertyDescription_14" className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">Schedule a Viewing</h3>
            <p className="mb-4">Contact us to schedule a private viewing of this property</p>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Contact Agent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDescription;