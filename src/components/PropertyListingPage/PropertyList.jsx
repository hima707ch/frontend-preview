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
      const response = await fetch('api/properties');
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
      <h2 id="PropertyList_3" className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Properties</h2>
      <div id="PropertyList_4" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.length > 0 ? properties.map((property, index) => (
          <div
            key={property.id}
            id={`PropertyList_${index + 5}`}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <img
              src={images[index % images.length]}
              alt={property.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{property.name}</h3>
              <p className="text-gray-600 mb-4">{property.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">${property.price.toLocaleString()}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">{property.bedrooms} beds</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-600">{property.bathrooms} baths</span>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-gray-500">{property.location}</span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        )) : (
          <p id="PropertyList_5" className="col-span-3 text-center text-gray-600">No properties found.</p>
        )}
      </div>
    </div>
  );
};

export default PropertyList;