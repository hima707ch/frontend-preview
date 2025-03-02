import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PropertyDetails = () => {
  const [property, setProperty] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get('/api/property/1');
        setProperty(response.data);
      } catch (error) {
        console.error('Error fetching property:', error);
      }
    };
    fetchProperty();
  }, []);

  if (!property) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8" id="PropertyDetails_1">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          <div className="space-y-4" id="PropertyDetails_2">
            <h1 className="text-3xl font-bold text-gray-800">Luxury Villa with Ocean View</h1>
            <p className="text-2xl text-blue-600 font-semibold">$2,500,000</p>
            <p className="text-gray-600">123 Oceanview Drive, Malibu, CA 90265</p>
          </div>
          <div className="flex justify-end space-x-4" id="PropertyDetails_3">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">Schedule Tour</button>
            <button className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition duration-300">Save Property</button>
          </div>
        </div>

        <div className="border-t border-gray-200" id="PropertyDetails_4">
          <div className="flex space-x-1 p-4 bg-gray-50">
            {['overview', 'features', 'amenities', 'location'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg capitalize ${activeTab === tab ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-6" id="PropertyDetails_5">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-2xl font-bold text-gray-800">4,500</p>
                    <p className="text-gray-600">Square Feet</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-2xl font-bold text-gray-800">5</p>
                    <p className="text-gray-600">Bedrooms</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-2xl font-bold text-gray-800">4.5</p>
                    <p className="text-gray-600">Bathrooms</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  This stunning luxury villa offers breathtaking ocean views and modern living at its finest. 
                  Featuring an open concept design, high-end finishes, and extensive outdoor living spaces.
                </p>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-800">Interior Features</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Gourmet Kitchen</li>
                    <li>Hardwood Floors</li>
                    <li>Smart Home System</li>
                    <li>Wine Cellar</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-800">Exterior Features</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Infinity Pool</li>
                    <li>Outdoor Kitchen</li>
                    <li>Landscaped Gardens</li>
                    <li>3-Car Garage</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'amenities' && (
              <div className="grid grid-cols-3 gap-4">
                {['Security System', 'Central AC', 'Home Theater', 'Gym', 'Spa', 'Beach Access'].map((amenity) => (
                  <div key={amenity} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'location' && (
              <div className="space-y-4">
                <div className="h-64 bg-gray-200 rounded-lg">Map Placeholder</div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Nearby</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>Beach: 0.2 miles</li>
                      <li>Shopping: 1.5 miles</li>
                      <li>Restaurants: 0.8 miles</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Transportation</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>Airport: 25 mins</li>
                      <li>Highway Access: 10 mins</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;