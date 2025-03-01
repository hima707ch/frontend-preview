import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const PropertyMap = () => {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
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

  const dummyProperties = [
    {
      id: 1,
      title: 'Luxury Villa',
      location: 'Beverly Hills, CA',
      price: '$5,000,000',
      image: images[0],
      coordinates: { lat: 34.0736, lng: -118.4004 }
    },
    {
      id: 2,
      title: 'Modern Apartment',
      location: 'Manhattan, NY',
      price: '$2,500,000',
      image: images[1],
      coordinates: { lat: 40.7128, lng: -74.0060 }
    },
  ];

  return (
    <div id="PropertyMap_1" className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 id="PropertyMap_2" className="text-4xl font-bold text-gray-800 mb-8 text-center">Property Map</h1>
        
        <div id="PropertyMap_3" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div id="PropertyMap_4" className="bg-white rounded-xl shadow-lg p-6 h-[600px] overflow-y-auto">
            {dummyProperties.map((property) => (
              <div
                key={property.id}
                id={`PropertyMap_${property.id + 4}`}
                className={`mb-6 cursor-pointer transform transition-all duration-300 hover:scale-105 ${selectedProperty?.id === property.id ? 'ring-2 ring-blue-500' : ''}`}
                onClick={() => setSelectedProperty(property)}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">{property.title}</h3>
                    <p className="text-gray-600 mt-2">{property.location}</p>
                    <p className="text-blue-600 font-bold mt-2">{property.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div id="PropertyMap_7" className="bg-white rounded-xl shadow-lg p-6">
            <div className="h-[600px] bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-600 text-center">
                Map Integration Here<br />
                (Google Maps or similar service)
              </p>
            </div>
          </div>
        </div>

        {selectedProperty && (
          <div id="PropertyMap_8" className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Selected Property Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img
                src={selectedProperty.image}
                alt={selectedProperty.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{selectedProperty.title}</h3>
                <p className="text-gray-600 mt-2">{selectedProperty.location}</p>
                <p className="text-blue-600 font-bold mt-2">{selectedProperty.price}</p>
                <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  Contact Agent
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyMap;