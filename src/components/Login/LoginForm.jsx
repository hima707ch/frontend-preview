import React from 'react';
import useLogin from './useLogin';

const LoginForm = () => {
  const { formData, handleChange, handleSubmit } = useLogin();

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit} id="LoginForm_1">
      <div className="rounded-md shadow-sm -space-y-px" id="LoginForm_2">
        <div id="LoginForm_3">
          <label htmlFor="username" className="sr-only">Username</label>
          <input
            id="LoginForm_4"
            name="username"
            type="text"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div id="LoginForm_5">
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

      <div id="LoginForm_7">
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          id="LoginForm_8"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

export default LoginForm;