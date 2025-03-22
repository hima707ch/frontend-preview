import React, { useState } from 'react';

const AddProperty = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({
      title: '',
      description: '',
      price: '',
      location: ''
    });
  };

  return (
    <div id="AddProperty_1" className="bg-white rounded-lg shadow p-6">
      <h2 id="AddProperty_2" className="text-2xl font-semibold mb-6">Add New Property</h2>
      <form id="AddProperty_3" onSubmit={handleSubmit} className="space-y-4">
        <div id="AddProperty_4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div id="AddProperty_5">
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            rows="4"
            required
          />
        </div>
        <div id="AddProperty_6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div id="AddProperty_7">
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
        >
          Add Property
        </button>
      </form>
    </div>
  );
};

export default AddProperty;