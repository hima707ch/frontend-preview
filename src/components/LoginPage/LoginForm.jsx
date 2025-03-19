import React from 'react';
import useLoginForm from './useLoginForm';

export const LoginForm = ({ onSubmit, loading, error }) => {
  const { formData, handleChange, handleSubmit } = useLoginForm(onSubmit);

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit} id="LoginForm_1">
      <div className="rounded-md shadow-sm -space-y-px" id="LoginForm_2">
        <div id="LoginForm_3">
          <label htmlFor="username" className="sr-only">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div id="LoginForm_4">
          <label htmlFor="password" className="sr-only">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
      </div>

      {error && <div className="text-red-500 text-sm text-center" id="LoginForm_5">{error}</div>}

      <div id="LoginForm_6">
        <button
          type="submit"
          disabled={loading}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {loading ? 'Signing in...' : 'Sign in'}
        </button>
      </div>
    </form>
  );
};