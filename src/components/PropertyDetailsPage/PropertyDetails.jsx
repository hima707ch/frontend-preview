import React, { useState, useEffect } from 'react';
import axios from 'axios';
import images from '../assets/images';

const PropertyDetails = () => {
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get('/api/properties/1');
        setProperty(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching property:', error);
        setLoading(false);
      }
    };
    fetchProperty();
  }, []);

  if (loading) {
    return (
      <div id="PropertyDetails_1" className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div id="PropertyDetails_2" className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div id="PropertyDetails_3" className="space-y-4">
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <img src={images[0]} alt="Property" className="w-full h-full object-cover"/>
          </div>
          <div className="grid grid-cols-3 gap-2 h-24">
            {images.slice(1, 4).map((img, index) => (
              <div key={index} className="rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition">
                <img src={img} alt={`Property ${index + 1}`} className="w-full h-full object-cover"/>
              </div>
            ))}
          </div>
        </div>

        <div id="PropertyDetails_4" className="space-y-6">
          <div className="border-b pb-4">
            <h1 className="text-3xl font-bold text-gray-900">Luxury Villa with Ocean View</h1>
            <p className="text-2xl font-semibold text-blue-600 mt-2">$1,250,000</p>
            <p className="text-gray-600 mt-2">123 Oceanview Drive, Malibu, CA 90265</p>
          </div>

          <div id="PropertyDetails_5" className="grid grid-cols-3 gap-4 py-4">
            <div className="text-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
              <p className="text-xl font-semibold text-gray-900">4</p>
              <p className="text-gray-600">Bedrooms</p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
              <p className="text-xl font-semibold text-gray-900">3.5</p>
              <p className="text-gray-600">Bathrooms</p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
              <p className="text-xl font-semibold text-gray-900">3,500</p>
              <p className="text-gray-600">Sq Ft</p>
            </div>
          </div>

          <div id="PropertyDetails_6" className="space-y-4">
            <h2 className="text-xl font-semibold">Property Features</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>Swimming Pool</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>Garden</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>Garage</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>Security System</span>
              </div>
            </div>
          </div>

          <div id="PropertyDetails_7" className="space-y-4">
            <h2 className="text-xl font-semibold">Description</h2>
            <p className="text-gray-600 leading-relaxed">
              This stunning luxury villa offers breathtaking ocean views and modern amenities. The property features an open-concept living area, gourmet kitchen, and spacious bedrooms. The master suite includes a private balcony and spa-like bathroom. The outdoor area showcases a beautiful pool, landscaped garden, and entertainment space.
            </p>
          </div>

          <div id="PropertyDetails_8" className="pt-6">
            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1">
              Contact Agent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;