import React from 'react';

const PropertyForm = ({ onSubmit, isLoading }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title: e.target.title.value,
      description: e.target.description.value,
      price: parseFloat(e.target.price.value),
      location: e.target.location.value
    };
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" id="PropertyForm_1">
      <div className="mb-4" id="PropertyForm_2">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title" id="PropertyForm_3">Title</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="PropertyForm_4"
          type="text"
          name="title"
          placeholder="Property Title"
          required
        />
      </div>
      <div className="mb-4" id="PropertyForm_5">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description" id="PropertyForm_6">Description</label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="PropertyForm_7"
          name="description"
          rows="4"
          placeholder="Property Description"
          required
        ></textarea>
      </div>
      <div className="mb-4" id="PropertyForm_8">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price" id="PropertyForm_9">Price</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="PropertyForm_10"
          type="number"
          name="price"
          placeholder="Property Price"
          required
          min="0"
          step="0.01"
        />
      </div>
      <div className="mb-6" id="PropertyForm_11">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location" id="PropertyForm_12">Location</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="PropertyForm_13"
          type="text"
          name="location"
          placeholder="Property Location"
          required
        />
      </div>
      <div className="flex items-center justify-end" id="PropertyForm_14">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
          type="submit"
          disabled={isLoading}
          id="PropertyForm_15"
        >
          {isLoading ? 'Adding Property...' : 'Add Property'}
        </button>
      </div>
    </form>
  );
};

export default PropertyForm;