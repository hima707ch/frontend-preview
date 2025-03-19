import React from 'react';
import LoginForm from './LoginForm';
import useLogin from './useLogin';

const Body = () => {
  const { isLoading, error } = useLogin();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" id="Body_1">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow" id="Body_2">
        <div id="Body_3">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900" id="Body_4">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600" id="Body_5">
            Enter your credentials to access the platform
          </p>
        </div>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert" id="Body_6">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        {isLoading ? (
          <div className="flex justify-center" id="Body_7">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <LoginForm />
        )}
      </div>
    </div>
  );
};

export default Body;