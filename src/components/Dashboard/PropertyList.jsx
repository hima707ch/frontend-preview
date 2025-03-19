import React from 'react';
import { usePropertyList } from './usePropertyList';

const PropertyList = () => {
  const { properties, handleDelete, handleEdit } = usePropertyList();

  return (
    <div id="PropertyList_1" className="mt-8">
      <h3 id="PropertyList_2" className="text-2xl font-semibold mb-4">Your Properties</h3>
      <div id="PropertyList_3" className="grid grid-cols-1 gap-4">
        {properties.map((property) => (
          <div key={property.id} className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-xl font-medium">{property.title}</h4>
                <p className="text-gray-600">{property.description}</p>
                <p className="text-gray-800 font-medium mt-2">${property.price}</p>
                <p className="text-gray-600">{property.location}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(property.id)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(property.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;