import React, { useState } from 'react';

const RegistrationForm = ({ onRegister, error, success, isLoading }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'buyer'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formData);
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md" id="RegistrationForm_1">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10" id="RegistrationForm_2">
        <form className="space-y-6" onSubmit={handleSubmit} id="RegistrationForm_3">
          <div id="RegistrationForm_4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <div className="mt-1">
              <input
                id="RegistrationForm_5"
                name="username"
                type="text"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
          </div>

          <div id="RegistrationForm_6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1">
              <input
                id="RegistrationForm_7"
                name="password"
                type="password"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-4" id="RegistrationForm_8">
            <div className="flex items-center">
              <input
                id="RegistrationForm_9"
                name="role"
                type="radio"
                value="buyer"
                checked={formData.role === 'buyer'}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
              />
              <label htmlFor="buyer" className="ml-3 block text-sm font-medium text-gray-700">
                Buyer
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="RegistrationForm_10"
                name="role"
                type="radio"
                value="seller"
                checked={formData.role === 'seller'}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
              />
              <label htmlFor="seller" className="ml-3 block text-sm font-medium text-gray-700">
                Seller
              </label>
            </div>
          </div>

          {error && (
            <div className="text-red-600 text-sm" id="RegistrationForm_11">
              {error}
            </div>
          )}

          {success && (
            <div className="text-green-600 text-sm" id="RegistrationForm_12">
              {success}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            id="RegistrationForm_13"
          >
            {isLoading ? 'Registering...' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;