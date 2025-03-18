import React from 'react';
import { useAddProperty } from './useAddProperty';

const AddProperty = () => {
  const { formData, handleChange, handleSubmit, error, loading } = useAddProperty();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" id="AddProperty_1">
      <div className="max-w-md w-full space-y-8 mx-auto" id="AddProperty_2">
        <div id="AddProperty_3">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Add New Property</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit} id="AddProperty_4">
          {error && <div className="text-red-500 text-center" id="AddProperty_5">{error}</div>}
          <div className="rounded-md shadow-sm -space-y-px" id="AddProperty_6">
            <div id="AddProperty_7">
              <input
                id="AddProperty_8"
                name="title"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Property Title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div id="AddProperty_9">
              <textarea
                id="AddProperty_10"
                name="description"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Property Description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
              />
            </div>
            <div id="AddProperty_11">
              <input
                id="AddProperty_12"
                name="price"
                type="number"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            <div id="AddProperty_13">
              <input
                id="AddProperty_14"
                name="location"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
              />
            </div>
          </div>

          <div id="AddProperty_15">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={loading}
            >
              {loading ? 'Adding Property...' : 'Add Property'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;