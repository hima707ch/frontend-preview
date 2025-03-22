import React from 'react';

const RegisterForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    onSubmit({
      username: formData.get('username'),
      password: formData.get('password'),
      role: formData.get('role')
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6" id="RegisterForm_1">
      <div className="space-y-4" id="RegisterForm_2">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700" id="RegisterForm_3">Username</label>
          <input
            id="RegisterForm_4"
            name="username"
            type="text"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700" id="RegisterForm_5">Password</label>
          <input
            id="RegisterForm_6"
            name="password"
            type="password"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-gray-700" id="RegisterForm_7">Role</label>
          <select
            id="RegisterForm_8"
            name="role"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        id="RegisterForm_9"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;