import React from 'react';
import usePropertyManager from './usePropertyManager';
import images from '../assets/images';

const PropertyManager = () => {
  const {
    properties,
    editingProperty,
    deleteConfirmId,
    handleEdit,
    handleDelete,
    handleConfirmDelete,
    handleCancelDelete,
    handleSaveEdit,
    handleEditChange,
  } = usePropertyManager();

  return (
    <div id="PropertyManager_1" className="bg-white rounded-lg shadow-lg p-6">
      <div id="PropertyManager_2" className="overflow-x-auto">
        <table id="PropertyManager_3" className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th id="PropertyManager_4" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
              <th id="PropertyManager_5" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th id="PropertyManager_6" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th id="PropertyManager_7" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th id="PropertyManager_8" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {properties.map((property, index) => (
              <tr key={property.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img src={images[index % images.length]} alt={property.title} className="h-16 w-16 object-cover rounded" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {editingProperty?.id === property.id ? (
                    <input
                      type="text"
                      name="title"
                      value={editingProperty.title}
                      onChange={handleEditChange}
                      className="border rounded p-1"
                    />
                  ) : (
                    property.title
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {editingProperty?.id === property.id ? (
                    <input
                      type="number"
                      name="price"
                      value={editingProperty.price}
                      onChange={handleEditChange}
                      className="border rounded p-1"
                    />
                  ) : (
                    `$${property.price.toLocaleString()}`
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {editingProperty?.id === property.id ? (
                    <input
                      type="text"
                      name="location"
                      value={editingProperty.location}
                      onChange={handleEditChange}
                      className="border rounded p-1"
                    />
                  ) : (
                    property.location
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {editingProperty?.id === property.id ? (
                    <div className="space-x-2">
                      <button
                        onClick={() => handleSaveEdit()}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => handleEdit(null)}
                        className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="space-x-2">
                      <button
                        onClick={() => handleEdit(property)}
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(property.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {deleteConfirmId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Confirm Deletion</h3>
            <p>Are you sure you want to delete this property?</p>
            <div className="mt-4 space-x-2">
              <button
                onClick={handleConfirmDelete}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
              <button
                onClick={handleCancelDelete}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyManager;