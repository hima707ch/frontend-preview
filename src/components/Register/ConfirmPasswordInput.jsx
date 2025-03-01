import React, { useState } from 'react';

const ConfirmPasswordInput = ({ onPasswordsMatch }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (confirmPassword && e.target.value !== confirmPassword) {
      setError('Passwords do not match');
      onPasswordsMatch?.(false);
    } else if (confirmPassword) {
      setError('');
      onPasswordsMatch?.(true);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (password && e.target.value !== password) {
      setError('Passwords do not match');
      onPasswordsMatch?.(false);
    } else {
      setError('');
      onPasswordsMatch?.(true);
    }
  };

  return (
    <div id="ConfirmPasswordInput_1" className="w-full max-w-md mx-auto p-6 space-y-4">
      <div className="relative">
        <input
          id="ConfirmPasswordInput_2"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter password"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
        />
      </div>
      <div className="relative">
        <input
          id="ConfirmPasswordInput_3"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          placeholder="Confirm password"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
        />
      </div>
      {error && (
        <p id="ConfirmPasswordInput_4" className="text-red-500 text-sm mt-1 animate-pulse">
          {error}
        </p>
      )}
      <div id="ConfirmPasswordInput_5" className="text-sm text-gray-600">
        <ul className="list-disc list-inside space-y-1">
          <li>Password must be at least 8 characters long</li>
          <li>Include at least one uppercase letter</li>
          <li>Include at least one number</li>
          <li>Include at least one special character</li>
        </ul>
      </div>
    </div>
  );
};

export default ConfirmPasswordInput;