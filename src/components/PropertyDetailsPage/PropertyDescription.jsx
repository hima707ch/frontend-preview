import React, { useState, useEffect } from 'react';

const PropertyDescription = () => {
  const [property, setProperty] = useState({
    title: 'Luxurious Modern Villa',
    size: '4,500 sq ft',
    bedrooms: 4,
    bathrooms: 3.5,
    yearBuilt: 2022,
    features: [
      'Open-concept floor plan',
      'Floor-to-ceiling windows',
      'Smart home technology',
      'Gourmet kitchen with island',
      'Master suite with walk-in closet',
      'Private backyard with pool'
    ],
    description: 'This stunning contemporary villa represents the perfect blend of luxury and functionality. Nestled in a prestigious neighborhood, this architectural masterpiece offers an unparalleled living experience with its thoughtful design and premium finishes.'
  });

  useEffect(() => {
    // Fetch property details from backend
    const fetchProperty = async () => {
      try {
        const response = await fetch('/api/property/details');
        const data = await response.json();
        setProperty(data);
      } catch (error) {
        console.error('Error fetching property details:', error);
      }
    };
    fetchProperty();
  }, []);

  return (
    <div id="PropertyDescription_1" className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-lg">
      <h1 id="PropertyDescription_2" className="text-3xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {property.title}
      </h1>
      
      <div id="PropertyDescription_3" className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
          <p className="text-gray-600 text-sm">Size</p>
          <p className="text-gray-900 font-semibold">{property.size}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
          <p className="text-gray-600 text-sm">Bedrooms</p>
          <p className="text-gray-900 font-semibold">{property.bedrooms}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
          <p className="text-gray-600 text-sm">Bathrooms</p>
          <p className="text-gray-900 font-semibold">{property.bathrooms}</p>
        </div>
      </div>

      <div id="PropertyDescription_4" className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Property Overview</h2>
        <p className="text-gray-700 leading-relaxed">{property.description}</p>
      </div>

      <div id="PropertyDescription_5" className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
        <div className="grid grid-cols-2 gap-4">
          {property.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div id="PropertyDescription_6" className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Additional Information</h2>
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <div>
            <p className="font-medium">Year Built:</p>
            <p>{property.yearBuilt}</p>
          </div>
          <div>
            <p className="font-medium">Property Type:</p>
            <p>Single Family Home</p>
          </div>
          <div>
            <p className="font-medium">Parking:</p>
            <p>2 Car Garage</p>
          </div>
          <div>
            <p className="font-medium">Lot Size:</p>
            <p>0.25 Acres</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDescription;