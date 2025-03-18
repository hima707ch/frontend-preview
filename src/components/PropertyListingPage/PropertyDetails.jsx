import React from 'react';

const PropertyDetails = ({ property }) => {
  return (
    <div id="PropertyDetails_1" className="mb-8">
      <h1 id="PropertyDetails_2" className="text-3xl font-bold mb-4">{property.title}</h1>
      <div id="PropertyDetails_3" className="flex items-center gap-4 text-gray-600">
        <span id="PropertyDetails_4" className="flex items-center gap-2">
          <i className="fas fa-map-marker-alt"></i>
          {property.location}
        </span>
        <span id="PropertyDetails_5" className="text-2xl font-bold text-blue-600">
          ${property.price.toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default PropertyDetails;