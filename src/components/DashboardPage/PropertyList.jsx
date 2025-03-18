import React from 'react';

const PropertyList = ({ properties }) => {
  return (
    <div id="Dashboard_13" className="bg-white rounded-lg shadow p-6">
      <h2 id="Dashboard_14" className="text-xl font-semibold mb-4">Your Properties</h2>
      <div id="Dashboard_15" className="space-y-4">
        {properties?.map((property) => (
          <div key={property.id} id="Dashboard_16" className="border-b pb-4">
            <h3 id="Dashboard_17" className="font-medium">{property.title}</h3>
            <p id="Dashboard_18" className="text-gray-600">${property.price}</p>
            <p id="Dashboard_19" className="text-sm text-gray-500">{property.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;