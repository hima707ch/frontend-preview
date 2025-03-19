import React from 'react';
import usePropertyForm from './usePropertyForm';

export default function PropertyForm({ onSubmit, isLoading }) {
  const { formData, handleChange, handleSubmitForm, errors } = usePropertyForm(onSubmit);

  return (
    <form onSubmit={handleSubmitForm} className="mt-8 space-y-6" id="PropertyForm_1">
      <div className="rounded-md shadow-sm -space-y-px" id="PropertyForm_2">
        <div id="PropertyForm_3">
          <label htmlFor="title" className="sr-only">Title</label>
          <input
            id="PropertyForm_4"
            name="title"
            type="text"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Property Title"
            value={formData.title}
            onChange={handleChange}
          />
          {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
        </div>

        <div id="PropertyForm_5">
          <label htmlFor="description" className="sr-only">Description</label>
          <textarea
            id="PropertyForm_6"
            name="description"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Property Description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
          />
          {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
        </div>

        <div id="PropertyForm_7">
          <label htmlFor="price" className="sr-only">Price</label>
          <input
            id="PropertyForm_8"
            name="price"
            type="number"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
          />
          {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price}</p>}
        </div>

        <div id="PropertyForm_9">
          <label htmlFor="location" className="sr-only">Location</label>
          <input
            id="PropertyForm_10"
            name="location"
            type="text"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
          />
          {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
        </div>
      </div>

      <div id="PropertyForm_11">
        <button
          type="submit"
          disabled={isLoading}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400"
          id="PropertyForm_12"
        >
          {isLoading ? 'Adding Property...' : 'Add Property'}
        </button>
      </div>
    </form>
  );
}