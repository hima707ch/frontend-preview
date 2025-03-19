import React from 'react';
import { usePropertyForm } from './usePropertyForm';

const PropertyForm = ({ onSubmit, isLoading }) => {
  const { formData, handleChange, handleSubmitForm, errors } = usePropertyForm(onSubmit);

  return (
    <form onSubmit={handleSubmitForm} className="space-y-6 bg-white p-8 rounded-lg shadow" id="PropertyForm_1">
      <div id="PropertyForm_2">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          id="PropertyForm_3"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {errors.title && <p className="mt-1 text-sm text-red-600" id="PropertyForm_4">{errors.title}</p>}
      </div>

      <div id="PropertyForm_5">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="PropertyForm_6"
          name="description"
          rows="4"
          value={formData.description}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {errors.description && <p className="mt-1 text-sm text-red-600" id="PropertyForm_7">{errors.description}</p>}
      </div>

      <div id="PropertyForm_8">
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
        <input
          type="number"
          id="PropertyForm_9"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {errors.price && <p className="mt-1 text-sm text-red-600" id="PropertyForm_10">{errors.price}</p>}
      </div>

      <div id="PropertyForm_11">
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
        <input
          type="text"
          id="PropertyForm_12"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {errors.location && <p className="mt-1 text-sm text-red-600" id="PropertyForm_13">{errors.location}</p>}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400"
        id="PropertyForm_14"
      >
        {isLoading ? 'Adding Property...' : 'Add Property'}
      </button>
    </form>
  );
};

export default PropertyForm;