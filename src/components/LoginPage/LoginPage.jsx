import React from 'react';
import { LoginForm } from './LoginForm';
import useLogin from './useLogin';

const LoginPage = () => {
  const { handleLogin, loading, error } = useLogin();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" id="LoginPage_1">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg" id="LoginPage_2">
        <div id="LoginPage_3">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">Or start your journey with us</p>
        </div>
        <LoginForm onSubmit={handleLogin} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default LoginPage;