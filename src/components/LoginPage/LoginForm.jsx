import React from 'react';

const LoginForm = ({ onSubmit, loading, error }) => {
  return (
    <form id="LoginForm_1" onSubmit={onSubmit} className="space-y-6">
      <div id="LoginForm_2">
        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
        <input
          id="LoginForm_3"
          type="text"
          name="username"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div id="LoginForm_4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input
          id="LoginForm_5"
          type="password"
          name="password"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      {error && (
        <div id="LoginForm_6" className="text-red-500 text-sm">{error}</div>
      )}
      <button
        id="LoginForm_7"
        type="submit"
        disabled={loading}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
};

export default LoginForm;