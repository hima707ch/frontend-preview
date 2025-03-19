import React from 'react';
import { useSellerPanel } from './useSellerPanel';

const SellerPanel = () => {
  const { properties, deleteProperty, loading } = useSellerPanel();

  return (
    <div id="SellerPanel_1" className="space-y-6">
      <div id="SellerPanel_2" className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Property Management</h2>
        <a
          href="/add-property"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Add New Property
        </a>
      </div>

      <div id="SellerPanel_3" className="bg-white rounded-lg shadow-md">
        {loading ? (
          <div className="p-4">Loading...</div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="px-6 py-3 text-left">Title</th>
                <th className="px-6 py-3 text-left">Location</th>
                <th className="px-6 py-3 text-left">Price</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {properties.map((property) => (
                <tr key={property.id} className="border-b">
                  <td className="px-6 py-4">{property.title}</td>
                  <td className="px-6 py-4">{property.location}</td>
                  <td className="px-6 py-4">${property.price}</td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <a
                      href={`/edit-property/${property.id}`}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Edit
                    </a>
                    <button
                      onClick={() => deleteProperty(property.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default SellerPanel;
