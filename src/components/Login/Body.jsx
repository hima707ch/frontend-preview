import React from 'react';
import LoginForm from './LoginForm';
import useLogin from './useLogin';
import images from '../assets/images';

const Body = () => {
  const { handleLogin, error, isLoading } = useLogin();

  return (
    <div id="Body_1" className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div id="Body_2" className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div id="Body_3" className="text-center">
          <img id="Body_4" className="mx-auto h-12 w-auto" src={images[0]} alt="Logo" />
          <h2 id="Body_5" className="mt-6 text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          <p id="Body_6" className="mt-2 text-sm text-gray-600">Access your real estate dashboard</p>
        </div>
        <LoginForm onSubmit={handleLogin} error={error} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Body;