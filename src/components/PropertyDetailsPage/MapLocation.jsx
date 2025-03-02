import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function MapLocation() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get('/api/properties/1/location');
        setLocation(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load location data');
        setLoading(false);
      }
    };
    fetchLocation();
  }, []);

  if (loading) {
    return (
      <div id="MapLocation_1" className="flex items-center justify-center h-96 bg-gray-100 rounded-lg">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div id="MapLocation_2" className="flex items-center justify-center h-96 bg-red-50 rounded-lg">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div id="MapLocation_3" className="w-full">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 id="MapLocation_4" className="text-2xl font-semibold text-gray-800 mb-4">Location & Nearby</h2>
          <div id="MapLocation_5" className="space-y-4">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-gray-700">{location?.address || '123 Property Street, City'}</span>
            </div>
          </div>
        </div>
        
        <div id="MapLocation_6" className="relative w-full h-96">
          <iframe
            title="property-location"
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(location?.address || 'Default Location')}`}
            allowFullScreen
          ></iframe>
        </div>

        <div id="MapLocation_7" className="p-6 bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Nearby Amenities</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div id="MapLocation_8" className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>Hospital</span>
            </div>
            <div id="MapLocation_9" className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>School</span>
            </div>
            <div id="MapLocation_10" className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>Shopping</span>
            </div>
            <div id="MapLocation_11" className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>Transport</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}