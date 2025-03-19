import React from 'react';
import { PropertyList } from './PropertyList';
import { useBuyerPanel } from './useBuyerPanel';

export const BuyerPanel = () => {
  const { properties, isLoading } = useBuyerPanel();

  return (
    <div id="BuyerPanel_1" className="space-y-6">
      <div id="BuyerPanel_2" className="bg-white rounded-lg shadow p-6">
        <h2 id="BuyerPanel_3" className="text-xl font-semibold mb-4">Recent Properties</h2>
        <PropertyList properties={properties} isLoading={isLoading} />
      </div>
      <div id="BuyerPanel_4" className="bg-white rounded-lg shadow p-6">
        <h2 id="BuyerPanel_5" className="text-xl font-semibold mb-4">Search Tools</h2>
        <div id="BuyerPanel_6" className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            id="BuyerPanel_7"
            type="text"
            placeholder="Search by location"
            className="p-2 border rounded-md"
          />
          <input
            id="BuyerPanel_8"
            type="number"
            placeholder="Max price"
            className="p-2 border rounded-md"
          />
        </div>
      </div>
    </div>
  );
}