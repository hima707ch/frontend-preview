import React from 'react';
import PropertyCard from './PropertyCard';

const PropertyGrid = ({ properties }) => {
  return (
    <div id="PropertyGrid_1" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyGrid;