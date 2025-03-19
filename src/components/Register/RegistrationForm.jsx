import React from 'react';

const RegistrationForm = ({ onSubmit, loading }) => {
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
    <form onSubmit={handleSubmit} className="space-y-4" id="RegistrationForm_1">
      <div id="RegistrationForm_2">
        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div id="RegistrationForm_3">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div id="RegistrationForm_4">
        <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
        <select
          name="role"
          id="role"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
        </select>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300"
        id="RegistrationForm_5"
      >
        {loading ? 'Registering...' : 'Register'}
      </button>
    </form>
  );
};

export default RegistrationForm;