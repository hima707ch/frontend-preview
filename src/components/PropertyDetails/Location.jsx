import React from 'react';

const Location = ({ location }) => {
  return (
    <div id="Location_1" className="space-y-4">
      <h2 id="Location_2" className="text-2xl font-semibold">Location</h2>
      <p id="Location_3" className="text-gray-700">{location}</p>
      <div id="Location_4" className="h-64 bg-gray-200 rounded-lg">
        {/* Map placeholder */}
        <div id="Location_5" className="w-full h-full flex items-center justify-center text-gray-500">
          Map View
        </div>
      </div>
    </div>
  );
};

export default Location;