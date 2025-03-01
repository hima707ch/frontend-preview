import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const LocationMap = () => {
  const position = [51.505, -0.09];
  const locations = [
    { id: 1, name: 'Main Office', position: [51.505, -0.09], description: 'Our headquarters' },
    { id: 2, name: 'Branch Office', position: [51.51, -0.1], description: 'Regional branch' },
    { id: 3, name: 'Distribution Center', position: [51.49, -0.08], description: 'Logistics hub' }
  ];

  return (
    <div id="LocationMap_1" className="w-full p-4">
      <h2 id="LocationMap_2" className="text-3xl font-bold text-center mb-8 text-gray-800">Our Locations</h2>
      <div id="LocationMap_3" className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div id="LocationMap_4" className="grid md:grid-cols-2 gap-4">
          <div id="LocationMap_5" className="p-6">
            <h3 id="LocationMap_6" className="text-xl font-semibold mb-4 text-gray-700">Find Us Here</h3>
            <div id="LocationMap_7" className="space-y-4">
              {locations.map((location) => (
                <div key={location.id} id={`LocationMap_${location.id + 7}`} className="p-4 border rounded-lg hover:bg-gray-50 transition-all duration-300">
                  <h4 className="font-medium text-indigo-600">{location.name}</h4>
                  <p className="text-gray-600">{location.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div id="LocationMap_11" className="h-[500px] w-full">
            <MapContainer
              center={position}
              zoom={13}
              style={{ height: '100%', width: '100%' }}
              className="rounded-lg overflow-hidden"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {locations.map((location) => (
                <Marker
                  key={location.id}
                  position={location.position}
                  icon={customIcon}
                >
                  <Popup>
                    <div className="p-2">
                      <h3 className="font-bold">{location.name}</h3>
                      <p>{location.description}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;