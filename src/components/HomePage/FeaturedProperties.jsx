import React, { useState, useEffect } from 'react';
import images from '../assets/images';
import axios from 'axios';

const FeaturedProperties = () => {
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
      <div id="FeaturedProperties_1" className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div id="FeaturedProperties_2" className="container mx-auto px-4 py-12">
      <h2 id="FeaturedProperties_3" className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Featured Properties
      </h2>
      <div id="FeaturedProperties_4" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property, index) => (
          <div
            key={property.id || index}
            id={`FeaturedProperties_${index + 5}`}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl"
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
              <h3 className="text-xl font-bold text-gray-800 mb-2">{property.title || 'Luxury Villa'}</h3>
              <p className="text-gray-600 mb-4">{property.location || 'Beverly Hills, CA'}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-blue-600">
                  ${property.price?.toLocaleString() || '1,250,000'}
                </span>
                <div className="flex items-center space-x-2 text-gray-500">
                  <span>{property.bedrooms || 4} beds</span>
                  <span>•</span>
                  <span>{property.bathrooms || 3} baths</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">{property.sqft || '3,500'} sqft</span>
                </div>
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-md hover:shadow-lg">
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

export default FeaturedProperties;