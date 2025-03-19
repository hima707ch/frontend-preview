import React from 'react';
import { usePropertyManagement } from './usePropertyManagement';

const PropertyManagement = ({ userRole }) => {
  const { properties, deleteProperty, isLoading, error } = usePropertyManagement();

  if (isLoading) return <div id="PropMgmt_1" className="animate-pulse">Loading properties...</div>;
  if (error) return <div id="PropMgmt_2" className="text-red-500">{error}</div>;

  return (
    <div id="PropMgmt_3" className="bg-white rounded-lg shadow p-6">
      <div id="PropMgmt_4" className="flex justify-between items-center mb-6">
        <h2 id="PropMgmt_5" className="text-2xl font-semibold">Properties</h2>
        {userRole === 'seller' && (
          <button
            id="PropMgmt_6"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => window.location.href = '/add-property'}
          >
            Add New Property
          </button>
        )}
      </div>
      <div id="PropMgmt_7" className="space-y-4">
        {properties.map((property) => (
          <div
            key={property.id}
            id={`PropMgmt_8_${property.id}`}
            className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <div id={`PropMgmt_9_${property.id}`} className="flex justify-between items-start">
              <div>
                <h3 id={`PropMgmt_10_${property.id}`} className="text-xl font-semibold">{property.title}</h3>
                <p id={`PropMgmt_11_${property.id}`} className="text-gray-600">{property.location}</p>
                <p id={`PropMgmt_12_${property.id}`} className="text-green-600 font-semibold">${property.price}</p>
              </div>
              {userRole === 'seller' && (
                <div id={`PropMgmt_13_${property.id}`} className="space-x-2">
                  <button
                    onClick={() => window.location.href = `/edit-property/${property.id}`}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteProperty(property.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyManagement;
