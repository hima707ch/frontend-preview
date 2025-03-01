import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Map = () => {
  const position = [51.505, -0.09];
  const locations = [
    { id: 1, position: [51.505, -0.09], name: 'London Office', description: 'Main headquarters' },
    { id: 2, position: [51.51, -0.1], name: 'Tech Hub', description: 'Innovation center' },
    { id: 3, position: [51.49, -0.08], name: 'Creative Space', description: 'Design studio' },
  ];

  return (
    <div id="Map_1" className="w-full h-screen p-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 id="Map_2" className="text-3xl font-bold text-gray-800 mb-6">Our Locations</h2>
        <div id="Map_3" className="w-full h-[600px] rounded-lg overflow-hidden shadow-xl">
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={true}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locations.map((location) => (
              <Marker key={location.id} position={location.position}>
                <Popup>
                  <div id="Map_4" className="p-2">
                    <h3 className="text-lg font-semibold text-gray-800">{location.name}</h3>
                    <p className="text-gray-600">{location.description}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        <div id="Map_5" className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((location) => (
            <div
              key={location.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{location.name}</h3>
              <p className="text-gray-600">{location.description}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
                Get Directions
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Map;