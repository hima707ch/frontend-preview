import React from 'react';
import { usePropertyDetails } from './usePropertyDetails';

const PropertyDetails = () => {
  const {
    property,
    isLoading,
    error,
    isEditing,
    formData,
    handleInputChange,
    handleEdit,
    handleUpdate,
    handleDelete,
    showDeleteModal,
    setShowDeleteModal,
    isOwner
  } = usePropertyDetails();

  if (isLoading) return <div id="PropertyDetails_1" className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div id="PropertyDetails_2" className="text-red-500 text-center p-4">{error}</div>;
  if (!property) return null;

  return (
    <div id="PropertyDetails_3" className="container mx-auto px-4 py-8">
      {!isEditing ? (
        <div id="PropertyDetails_4" className="bg-white rounded-lg shadow-lg p-6">
          <h1 id="PropertyDetails_5" className="text-3xl font-bold mb-4">{property.title}</h1>
          <div id="PropertyDetails_6" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div id="PropertyDetails_7" className="space-y-4">
              <p className="text-gray-600">{property.description}</p>
              <div className="flex items-center">
                <span className="font-bold">Price:</span>
                <span className="ml-2 text-green-600">${property.price}</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold">Location:</span>
                <span className="ml-2">{property.location}</span>
              </div>
            </div>
          </div>
          {isOwner && (
            <div id="PropertyDetails_8" className="mt-6 space-x-4">
              <button
                onClick={handleEdit}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Edit Property
              </button>
              <button
                onClick={() => setShowDeleteModal(true)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete Property
              </button>
            </div>
          )}
        </div>
      ) : (
        <form id="PropertyDetails_9" onSubmit={handleUpdate} className="bg-white rounded-lg shadow-lg p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="mt-6 space-x-4">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => handleEdit()}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {showDeleteModal && (
        <div id="PropertyDetails_10" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
            <p>Are you sure you want to delete this property?</p>
            <div className="mt-4 space-x-4">
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
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

export default PropertyDetails;