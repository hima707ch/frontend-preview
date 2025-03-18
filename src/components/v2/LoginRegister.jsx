import React from 'react';
import useLoginRegister from './useLoginRegister';

const LoginRegister = () => {
  const {
    activeTab,
    setActiveTab,
    loginForm,
    registerForm,
    handleLoginSubmit,
    handleRegisterSubmit,
    handleLoginChange,
    handleRegisterChange,
    error,
    success
  } = useLoginRegister();

  return (
    <div id="LoginRegister_1" className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div id="LoginRegister_2" className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div id="LoginRegister_3" className="flex justify-center space-x-4 border-b">
          <button
            id="LoginRegister_4"
            className={`pb-2 px-4 ${activeTab === 'login' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            id="LoginRegister_5"
            className={`pb-2 px-4 ${activeTab === 'register' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('register')}
          >
            Register
          </button>
        </div>

        {error && (
          <div id="LoginRegister_6" className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            {error}
          </div>
        )}

        {success && (
          <div id="LoginRegister_7" className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
            {success}
          </div>
        )}

        {activeTab === 'login' ? (
          <form id="LoginRegister_8" onSubmit={handleLoginSubmit} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <input
                  id="LoginRegister_9"
                  name="username"
                  type="text"
                  required
                  value={loginForm.username}
                  onChange={handleLoginChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                />
              </div>
              <div>
                <input
                  id="LoginRegister_10"
                  name="password"
                  type="password"
                  required
                  value={loginForm.password}
                  onChange={handleLoginChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <button
              id="LoginRegister_11"
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
          </form>
        ) : (
          <form id="LoginRegister_12" onSubmit={handleRegisterSubmit} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <input
                  id="LoginRegister_13"
                  name="username"
                  type="text"
                  required
                  value={registerForm.username}
                  onChange={handleRegisterChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                />
              </div>
              <div>
                <input
                  id="LoginRegister_14"
                  name="password"
                  type="password"
                  required
                  value={registerForm.password}
                  onChange={handleRegisterChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <button
              id="LoginRegister_15"
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginRegister;