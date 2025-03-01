import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const PasswordField = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState(0);

  const calculateStrength = (pass) => {
    let score = 0;
    if (pass.length >= 8) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[a-z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;
    setStrength(score);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    calculateStrength(newPassword);
  };

  const getStrengthColor = () => {
    if (strength <= 2) return 'bg-red-500';
    if (strength <= 3) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div id="PasswordField_1" className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="relative">
        <input
          id="PasswordField_2"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={handlePasswordChange}
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 pr-10 transition-all duration-300"
          placeholder="Enter your password"
        />
        <button
          id="PasswordField_3"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700 transition-colors duration-300"
        >
          {showPassword ? (
            <EyeSlashIcon className="h-5 w-5" />
          ) : (
            <EyeIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      <div id="PasswordField_4" className="mt-4">
        <div className="flex gap-1 mb-2">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`h-2 w-full rounded-full ${index < strength ? getStrengthColor() : 'bg-gray-200'} transition-all duration-300`}
            />
          ))}
        </div>
        <p className="text-sm text-gray-600">
          Password strength: {strength === 0 ? 'Very Weak' : strength <= 2 ? 'Weak' : strength <= 3 ? 'Medium' : 'Strong'}
        </p>
      </div>

      <div id="PasswordField_5" className="mt-4 text-sm text-gray-600">
        <p>Password must contain:</p>
        <ul className="list-disc ml-5 mt-2">
          <li className={password.length >= 8 ? 'text-green-500' : ''}>At least 8 characters</li>
          <li className={/[A-Z]/.test(password) ? 'text-green-500' : ''}>One uppercase letter</li>
          <li className={/[a-z]/.test(password) ? 'text-green-500' : ''}>One lowercase letter</li>
          <li className={/[0-9]/.test(password) ? 'text-green-500' : ''}>One number</li>
          <li className={/[^A-Za-z0-9]/.test(password) ? 'text-green-500' : ''}>One special character</li>
        </ul>
      </div>
    </div>
  );
};

export default PasswordField;