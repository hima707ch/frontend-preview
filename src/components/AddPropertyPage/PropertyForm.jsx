import React, { useState } from 'react';
import images from '../assets/images';

export default function PropertyForm({ onSubmit, isLoading }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    images: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmitForm} className="space-y-6 bg-white p-8 rounded-lg shadow" id="PropertyForm_1">
      <div id="PropertyForm_2">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Property Title</label>
        <input
          type="text"
          name="title"
          id="PropertyForm_3"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      <div id="PropertyForm_4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          name="description"
          id="PropertyForm_5"
          rows={4}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div id="PropertyForm_6">
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
        <div className="mt-1 relative rounded-md shadow-sm" id="PropertyForm_7">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" id="PropertyForm_8">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            type="number"
            name="price"
            id="PropertyForm_9"
            required
            className="pl-7 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
      </div>

      <div id="PropertyForm_10">
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
        <input
          type="text"
          name="location"
          id="PropertyForm_11"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.location}
          onChange={handleChange}
        />
      </div>

      <div className="flex justify-end" id="PropertyForm_12">
        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          id="PropertyForm_13"
        >
          {isLoading ? 'Adding Property...' : 'Add Property'}
        </button>
      </div>
    </form>
  );
}