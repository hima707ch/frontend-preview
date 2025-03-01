import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const MapComponent = () => {
  const [location, setLocation] = useState({
    lat: 40.7128,
    lng: -74.0060
  });

  const [markers, setMarkers] = useState([
    { id: 1, name: 'Central Park', lat: 40.7829, lng: -73.9654 },
    { id: 2, name: 'Times Square', lat: 40.7580, lng: -73.9855 },
    { id: 3, name: 'Empire State', lat: 40.7484, lng: -73.9857 }
  ]);

  useEffect(() => {
    // Simulating API call to get location data
    const fetchLocations = async () => {
      try {
        const response = await fetch('api/locations');
        const data = await response.json();
        setMarkers(data);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, []);

  return (
    <div id="MapComponent_1" className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 id="MapComponent_2" className="text-3xl font-bold text-gray-800 mb-6">Interactive Map</h2>
        
        <div id="MapComponent_3" className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div id="MapComponent_4" className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Search location..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="ml-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
              Search
            </button>
          </div>

          <div id="MapComponent_5" className="relative w-full h-[500px] rounded-lg overflow-hidden">
            <img 
              src={images[0]} 
              alt="Map" 
              className="w-full h-full object-cover"
            />
            {markers.map((marker) => (
              <div
                key={marker.id}
                style={{
                  position: 'absolute',
                  left: `${(marker.lng + 180) * (100 / 360)}%`,
                  top: `${(90 - marker.lat) * (100 / 180)}%`
                }}
                className="w-6 h-6 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-125 transition-transform duration-300"
              >
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black text-white px-2 py-1 rounded text-sm whitespace-nowrap">
                  {marker.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="MapComponent_6" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {markers.map((marker) => (
            <div key={marker.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{marker.name}</h3>
              <p className="text-gray-600">Lat: {marker.lat}</p>
              <p className="text-gray-600">Lng: {marker.lng}</p>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapComponent;