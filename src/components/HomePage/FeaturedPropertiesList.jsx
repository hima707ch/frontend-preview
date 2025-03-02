import React, { useState, useEffect } from 'react';
import axios from 'axios';
import images from '../assets/images';

const FeaturedPropertiesList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('/api/properties');
        setProperties(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching properties:', error);
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  if (loading) {
    return (
      <div id="FeaturedPropertiesList_1" className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div id="FeaturedPropertiesList_2" className="container mx-auto px-4 py-12">
      <h2 id="FeaturedPropertiesList_3" className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Properties</h2>
      <div id="FeaturedPropertiesList_4" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.length > 0 ? properties.map((property, index) => (
          <div
            key={property.id || index}
            id={`FeaturedPropertiesList_5_${index}`}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="relative">
              <img
                src={property.image || images[index % images.length]}
                alt={property.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Featured
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{property.title || 'Luxury Villa'}</h3>
              <div className="flex items-center mb-3">
                <svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-600">{property.location || 'Beverly Hills, CA'}</p>
              </div>
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-4">
                  <svg className="w-5 h-5 text-gray-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="text-gray-600">{property.beds || '4'} beds</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span className="text-gray-600">{property.baths || '3'} baths</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-2xl font-bold text-blue-600">${property.price || '1,250,000'}</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          </div>
        )) : (
          <div id="FeaturedPropertiesList_6" className="col-span-full text-center text-gray-500">
            No properties found
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedPropertiesList;