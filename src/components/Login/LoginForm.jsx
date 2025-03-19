import React, { useState } from 'react';

const LoginForm = ({ onSubmit, error, isLoading }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form id="LoginForm_1" onSubmit={handleSubmit} className="mt-8 space-y-6">
      {error && (
        <div id="LoginForm_2" className="bg-red-50 p-4 rounded-md">
          <p id="LoginForm_3" className="text-sm text-red-600">{error}</p>
        </div>
      )}
      <div id="LoginForm_4" className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="username" className="sr-only">Username</label>
          <input
            id="LoginForm_5"
            name="username"
            type="text"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">Password</label>
          <input
            id="LoginForm_6"
            name="password"
            type="password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <button
          id="LoginForm_7"
          type="submit"
          disabled={isLoading}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300"
        >
          {isLoading ? 'Signing in...' : 'Sign in'}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;