import React from 'react';

const PropertyForm = ({ onSubmit, isLoading }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    onSubmit({
      title: formData.get('title'),
      description: formData.get('description'),
      price: parseFloat(formData.get('price')),
      location: formData.get('location')
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6" id="PropertyForm_1">
      <div className="rounded-md shadow-sm -space-y-px" id="PropertyForm_2">
        <div id="PropertyForm_3">
          <label htmlFor="title" className="sr-only">Property Title</label>
          <input
            id="PropertyForm_4"
            name="title"
            type="text"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Property Title"
          />
        </div>
        <div id="PropertyForm_5">
          <label htmlFor="description" className="sr-only">Description</label>
          <textarea
            id="PropertyForm_6"
            name="description"
            required
            rows="4"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Property Description"
          />
        </div>
        <div id="PropertyForm_7">
          <label htmlFor="price" className="sr-only">Price</label>
          <input
            id="PropertyForm_8"
            name="price"
            type="number"
            required
            min="0"
            step="0.01"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Price"
          />
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
          />
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
};

export default PropertyForm;