import React from 'react';
import images from '../assets/images';

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
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" id="PropertyForm_1">
      <div className="mb-4" id="PropertyForm_2">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title" id="PropertyForm_3">
          Property Title
        </label>
        <input
          type="text"
          id="PropertyForm_4"
          name="title"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter property title"
          required
        />
      </div>

      <div className="mb-4" id="PropertyForm_5">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description" id="PropertyForm_6">
          Description
        </label>
        <textarea
          id="PropertyForm_7"
          name="description"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
          placeholder="Enter property description"
          required
        />
      </div>

      <div className="mb-4" id="PropertyForm_8">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price" id="PropertyForm_9">
          Price
        </label>
        <input
          type="number"
          id="PropertyForm_10"
          name="price"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter property price"
          min="0"
          step="0.01"
          required
        />
      </div>

      <div className="mb-6" id="PropertyForm_11">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location" id="PropertyForm_12">
          Location
        </label>
        <input
          type="text"
          id="PropertyForm_13"
          name="location"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter property location"
          required
        />
      </div>

      <div className="flex items-center justify-between" id="PropertyForm_14">
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          id="PropertyForm_15"
        >
          {isLoading ? 'Adding Property...' : 'Add Property'}
        </button>
      </div>
    </form>
  );
};

export default PropertyForm;