import React from 'react';
import RegistrationForm from './RegistrationForm';
import Header from './Header';
import { useRegister } from './useRegister';

const Body = () => {
  const { handleRegister, error, loading, success } = useRegister();

  return (
    <div className="min-h-screen bg-gray-50" id="Body_1">
      <Header />
      <main className="container mx-auto px-4 py-8" id="Body_2">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6" id="Body_3">
          <h1 className="text-2xl font-bold text-center mb-6" id="Body_4">Create an Account</h1>
          {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" id="Body_5">{error}</div>}
          {success && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4" id="Body_6">{success}</div>}
          <RegistrationForm onSubmit={handleRegister} loading={loading} />
        </div>
      </main>
    </div>
  );
};

export default Body;