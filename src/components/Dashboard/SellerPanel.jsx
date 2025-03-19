import React from 'react';
import { useSellerPanel } from './useSellerPanel';

export const SellerPanel = () => {
  const { properties, handleAddProperty, handleEditProperty, handleDeleteProperty, showAddForm, setShowAddForm } = useSellerPanel();

  return (
    <div id="SellerPanel_1" className="space-y-6">
      <div id="SellerPanel_2" className="flex justify-between items-center">
        <h2 id="SellerPanel_3" className="text-xl font-semibold">My Properties</h2>
        <button
          id="SellerPanel_4"
          onClick={() => setShowAddForm(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add New Property
        </button>
      </div>

      {showAddForm && (
        <div id="SellerPanel_5" className="bg-white rounded-lg shadow p-6">
          <form id="SellerPanel_6" onSubmit={handleAddProperty} className="space-y-4">
            <input
              id="SellerPanel_7"
              type="text"
              name="title"
              placeholder="Property Title"
              className="w-full p-2 border rounded-md"
              required
            />
            <textarea
              id="SellerPanel_8"
              name="description"
              placeholder="Description"
              className="w-full p-2 border rounded-md"
              required
            />
            <input
              id="SellerPanel_9"
              type="number"
              name="price"
              placeholder="Price"
              className="w-full p-2 border rounded-md"
              required
            />
            <input
              id="SellerPanel_10"
              type="text"
              name="location"
              placeholder="Location"
              className="w-full p-2 border rounded-md"
              required
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Add Property
            </button>
          </form>
        </div>
      )}

      <div id="SellerPanel_11" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-semibold">{property.title}</h3>
            <p className="text-gray-600">{property.location}</p>
            <p className="text-green-600 font-bold">${property.price}</p>
            <div className="mt-4 space-x-2">
              <button
                onClick={() => handleEditProperty(property.id)}
                className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteProperty(property.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}