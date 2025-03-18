import React from 'react';

const PropertyInfo = ({ property }) => {
  return (
    <div id="PropertyInfo_1" className="mb-8">
      <h2 id="PropertyInfo_2" className="text-2xl font-semibold mb-4">Property Details</h2>
      <div id="PropertyInfo_3" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div id="PropertyInfo_4" className="space-y-4">
          <div id="PropertyInfo_5" className="flex items-center gap-4 p-4 bg-gray-50 rounded">
            <i className="fas fa-bed text-blue-500"></i>
            <span>{property.bedrooms} Bedrooms</span>
          </div>
          <div id="PropertyInfo_6" className="flex items-center gap-4 p-4 bg-gray-50 rounded">
            <i className="fas fa-bath text-blue-500"></i>
            <span>{property.bathrooms} Bathrooms</span>
          </div>
          <div id="PropertyInfo_7" className="flex items-center gap-4 p-4 bg-gray-50 rounded">
            <i className="fas fa-ruler-combined text-blue-500"></i>
            <span>{property.area} sq ft</span>
          </div>
        </div>
        <div id="PropertyInfo_8" className="space-y-4">
          <h3 id="PropertyInfo_9" className="text-xl font-semibold">Description</h3>
          <p id="PropertyInfo_10" className="text-gray-600">{property.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyInfo;