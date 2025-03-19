import React from 'react';
import LoginForm from './LoginForm';
import Header from './Header';
import { useLogin } from './useLogin';

const Body = () => {
  const { handleLogin, error, isLoading } = useLogin();

  return (
    <div className="min-h-screen bg-gray-100" id="Body_1">
      <Header />
      <div className="container mx-auto px-4 py-8" id="Body_2">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6" id="Body_3">
          <h2 className="text-2xl font-bold text-center mb-6" id="Body_4">Login to Your Account</h2>
          <LoginForm onSubmit={handleLogin} error={error} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default Body;