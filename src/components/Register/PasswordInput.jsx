import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState(0);

  const calculateStrength = (value) => {
    let score = 0;
    if (value.length > 8) score += 1;
    if (/[A-Z]/.test(value)) score += 1;
    if (/[0-9]/.test(value)) score += 1;
    if (/[!@#$%^&*]/.test(value)) score += 1;
    setStrength(score);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    calculateStrength(value);
  };

  const getStrengthColor = () => {
    switch (strength) {
      case 0: return 'bg-red-500';
      case 1: return 'bg-orange-500';
      case 2: return 'bg-yellow-500';
      case 3: return 'bg-blue-500';
      case 4: return 'bg-green-500';
      default: return 'bg-gray-200';
    }
  };

  return (
    <div id="PasswordInput_1" className="max-w-md mx-auto p-6 space-y-4">
      <div className="relative">
        <input
          id="PasswordInput_2"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
        />
        <button
          id="PasswordInput_3"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700 transition-colors duration-300"
        >
          {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
        </button>
      </div>

      <div id="PasswordInput_4" className="space-y-2">
        <div className="flex gap-1">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className={`h-2 w-full rounded-full ${index < strength ? getStrengthColor() : 'bg-gray-200'} transition-all duration-300`}
            />
          ))}
        </div>
        <div className="text-sm text-gray-600">
          Password strength: {strength === 0 ? 'Very Weak' : strength === 1 ? 'Weak' : strength === 2 ? 'Medium' : strength === 3 ? 'Strong' : 'Very Strong'}
        </div>
      </div>

      <ul id="PasswordInput_5" className="text-sm text-gray-600 list-disc list-inside space-y-1">
        <li className={password.length > 8 ? 'text-green-500' : ''}>At least 8 characters</li>
        <li className={/[A-Z]/.test(password) ? 'text-green-500' : ''}>At least one uppercase letter</li>
        <li className={/[0-9]/.test(password) ? 'text-green-500' : ''}>At least one number</li>
        <li className={/[!@#$%^&*]/.test(password) ? 'text-green-500' : ''}>At least one special character</li>
      </ul>
    </div>
  );
};

export default PasswordInput;