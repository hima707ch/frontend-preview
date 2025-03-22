import React from 'react';

const LoginForm = ({ onSubmit, isLoading }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    onSubmit({ username, password });
  };

  return (
    <form id="LoginForm_1" className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div id="LoginForm_2" className="rounded-md shadow-sm -space-y-px">
        <div id="LoginForm_3">
          <label htmlFor="username" className="sr-only">Username</label>
          <input
            id="LoginForm_4"
            name="username"
            type="text"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Username"
          />
        </div>
        <div id="LoginForm_5">
          <label htmlFor="password" className="sr-only">Password</label>
          <input
            id="LoginForm_6"
            name="password"
            type="password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
          />
        </div>
      </div>

      <div id="LoginForm_7">
        <button
          type="submit"
          disabled={isLoading}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {isLoading ? 'Signing in...' : 'Sign in'}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;