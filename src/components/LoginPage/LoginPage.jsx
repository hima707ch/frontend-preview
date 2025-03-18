import React from 'react';
import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';
import { useLogin } from './useLogin';

const LoginPage = () => {
  const { handleLogin, error } = useLogin();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" id="LoginPage_1">
      <div className="max-w-md w-full space-y-8" id="LoginPage_2">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900" id="LoginPage_3">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600" id="LoginPage_4">
            Or{' '}
            <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500" id="LoginPage_5">
              create a new account
            </a>
          </p>
        </div>
        <LoginForm onSubmit={handleLogin} error={error} />
      </div>
    </div>
  );
};

export default LoginPage;