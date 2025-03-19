import React from 'react';
import LoginForm from './LoginForm';
import useLogin from './useLogin';
import images from '../assets/images';

const Body = () => {
  const { handleLogin, isLoading, error } = useLogin();

  return (
    <div id="Body_1" className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div id="Body_2" className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div id="Body_3" className="text-center">
          <img id="Body_4" className="mx-auto h-12 w-auto" src={images[0] || 'https://via.placeholder.com/150'} alt="Logo" />
          <h2 id="Body_5" className="mt-6 text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
        <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
        {error && <div id="Body_6" className="mt-4 text-red-600 text-center">{error}</div>}
      </div>
    </div>
  );
};

export default Body;