import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginRegisterLinks() {
  return (
    <div id="LoginRegisterLinks_1" className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-end space-x-4">
        <Link
          id="LoginRegisterLinks_2"
          to="/login"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Login
        </Link>
        <Link
          id="LoginRegisterLinks_3"
          to="/register"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Register
        </Link>
      </div>
    </div>
  );