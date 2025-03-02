import React, { useState } from 'react';

const UpdateButton = ({ isFormChanged, formData, onSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdate = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        onSuccess(data);
      } else {
        throw new Error('Update failed');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      id="UpdateButton_1"
      onClick={handleUpdate}
      disabled={!isFormChanged || isLoading}
      className={`relative px-6 py-2 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isFormChanged ? 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700' : 'bg-gray-400 cursor-not-allowed'} ${isLoading ? 'cursor-wait' : ''}`}
    >
      <span className={`${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {isFormChanged ? 'Save Changes' : 'No Changes'}
      </span>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
        </div>
      )}
    </button>
  );
};

export default UpdateButton;