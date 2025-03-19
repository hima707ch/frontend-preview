import React from 'react';
import { useBuyerPanel } from './useBuyerPanel';

const BuyerPanel = () => {
  const { properties, loading } = useBuyerPanel();

  if (loading) {
    return <div id="BuyerPanel_1" className="animate-pulse">Loading properties...</div>;
  }

  return (
    <div id="BuyerPanel_2" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <div key={property.id} id={`BuyerPanel_${property.id}`} className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
          <p className="text-gray-600 mb-4">{property.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-blue-600 font-bold">${property.price}</span>
            <span className="text-gray-500">{property.location}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BuyerPanel;
