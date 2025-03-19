import React, { useState } from 'react';

const LoginForm = ({ onSubmit, error, isLoading }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" id="LoginForm_1">
      <div id="LoginForm_2">
        <label htmlFor="username" className="block text-sm font-medium text-gray-700" id="LoginForm_3">
          Username
        </label>
        <input
          type="text"
          id="LoginForm_4"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div id="LoginForm_5">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700" id="LoginForm_6">
          Password
        </label>
        <input
          type="password"
          id="LoginForm_7"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      {error && (
        <div className="text-red-500 text-sm" id="LoginForm_8">
          {error}
        </div>
      )}
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        disabled={isLoading}
        id="LoginForm_9"
      >
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
};

export default LoginForm;