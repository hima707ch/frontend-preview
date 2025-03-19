import React from 'react';
import LoginForm from './LoginForm';
import useLogin from './useLogin';

const LoginPage = () => {
  const { handleLogin, loading, error } = useLogin();

  return (
    <div id="LoginPage_1" className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div id="LoginPage_2" className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 id="LoginPage_3" className="text-3xl font-bold text-center text-gray-800 mb-8">Welcome Back</h1>
        <LoginForm onSubmit={handleLogin} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default LoginPage;