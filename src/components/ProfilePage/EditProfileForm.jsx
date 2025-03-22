import React from 'react';

const EditProfileForm = ({ userProfile, onSubmit, onCancel }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    onSubmit({
      username: formData.get('username'),
      email: formData.get('email'),
      phone: formData.get('phone')
    });
  };

  return (
    <form id="EditProfileForm_1" onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <div id="EditProfileForm_2" className="space-y-4">
        <div id="EditProfileForm_3">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
          <input
            id="EditProfileForm_4"
            type="text"
            name="username"
            defaultValue={userProfile.username}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div id="EditProfileForm_5">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            id="EditProfileForm_6"
            type="email"
            name="email"
            defaultValue={userProfile.email}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div id="EditProfileForm_7">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input
            id="EditProfileForm_8"
            type="tel"
            name="phone"
            defaultValue={userProfile.phone}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div id="EditProfileForm_9" className="mt-6 flex space-x-4">
        <button
          type="submit"
          id="EditProfileForm_10"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Save Changes
        </button>
        <button
          type="button"
          id="EditProfileForm_11"
          onClick={onCancel}
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditProfileForm;