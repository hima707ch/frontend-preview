import React from 'react';
import LoginForm from './LoginForm';
import { useLogin } from './useLogin';

const Body = () => {
  const { handleLogin, error, loading } = useLogin();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" id="Body_1">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg" id="Body_2">
        <div id="Body_3">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
        <LoginForm handleLogin={handleLogin} error={error} loading={loading} />
      </div>
    </div>
  );
};

export default Body;