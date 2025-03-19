import React from 'react';
import useRegistrationForm from './useRegistrationForm';

const RegistrationForm = ({ onSubmit, isLoading }) => {
  const { formData, handleChange, errors, validateForm } = useRegistrationForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form id="RegistrationForm_1" onSubmit={handleSubmit} className="space-y-6">
      <div id="RegistrationForm_2">
        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
          Username
        </label>
        <div className="mt-1">
          <input
            id="RegistrationForm_3"
            name="username"
            type="text"
            required
            value={formData.username}
            onChange={handleChange}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.username && (
            <p id="RegistrationForm_4" className="mt-2 text-sm text-red-600">{errors.username}</p>
          )}
        </div>
      </div>

      <div id="RegistrationForm_5">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="mt-1">
          <input
            id="RegistrationForm_6"
            name="password"
            type="password"
            required
            value={formData.password}
            onChange={handleChange}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.password && (
            <p id="RegistrationForm_7" className="mt-2 text-sm text-red-600">{errors.password}</p>
          )}
        </div>
      </div>

      <div id="RegistrationForm_8">
        <label htmlFor="role" className="block text-sm font-medium text-gray-700">
          Role
        </label>
        <div className="mt-1">
          <select
            id="RegistrationForm_9"
            name="role"
            required
            value={formData.role}
            onChange={handleChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select a role</option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
          {errors.role && (
            <p id="RegistrationForm_10" className="mt-2 text-sm text-red-600">{errors.role}</p>
          )}
        </div>
      </div>

      <div id="RegistrationForm_11">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {isLoading ? 'Registering...' : 'Register'}
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;