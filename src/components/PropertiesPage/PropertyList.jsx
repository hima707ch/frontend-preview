import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await fetch('/api/properties');
      const data = await response.json();
      setProperties(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching properties:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div id="PropertyList_1" className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div id="PropertyList_2" className="container mx-auto px-4 py-8">
      <h1 id="PropertyList_3" className="text-3xl font-bold text-gray-800 mb-8">Available Properties</h1>
      <div id="PropertyList_4" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property, index) => (
          <div
            key={property.id || index}
            id={`PropertyList_${index + 5}`}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <div className="relative h-48">
              <img
                src={property.image || images[index % images.length]}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full">
                ${property.price || '500,000'}
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {property.title || 'Modern Villa with Ocean View'}
              </h2>
              <p className="text-gray-600 mb-4">
                {property.description || 'Beautiful property featuring 4 bedrooms, 3 bathrooms, and stunning ocean views.'}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <svg className="w-5 h-5 text-gray-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    {property.bedrooms || '4'} beds
                  </span>
                  <span className="flex items-center">
                    <svg className="w-5 h-5 text-gray-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z" />
                    </svg>
                    {property.bathrooms || '3'} baths
                  </span>
                </div>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                  onClick={() => window.location.href = `/property/${property.id}`}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;