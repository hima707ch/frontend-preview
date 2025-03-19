import React from 'react';
import LoginForm from './LoginForm';
import useLogin from './useLogin';

export default function Body() {
  const { handleLogin, error, isLoading } = useLogin();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8" id="Body_1">
      <div className="sm:mx-auto sm:w-full sm:max-w-md" id="Body_2">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900" id="Body_3">
          Sign in to your account
        </h2>
      </div>
      <LoginForm onSubmit={handleLogin} error={error} isLoading={isLoading} />
    </div>
  );
}