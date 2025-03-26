import React, { useState } from 'react';

const UpdateForm = ({ userData, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: userData.name || '',
    phone: userData.phone || '',
    email: userData.email || ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onUpdate(formData);
  };

  return (
    <form id="UpdateForm_1" onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <h3 id="UpdateForm_2" className="text-xl font-semibold text-gray-800 mb-6">Update Profile</h3>
      <div id="UpdateForm_3" className="space-y-4">
        <div id="UpdateForm_4">
          <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
          <input
            id="UpdateForm_5"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div id="UpdateForm_6">
          <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
          <input
            id="UpdateForm_7"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div id="UpdateForm_8">
          <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
          <input
            id="UpdateForm_9"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          id="UpdateForm_10"
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Update Profile
        </button>
      </div>
    </form>
  );
};

export default UpdateForm;