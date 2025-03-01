import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const CaptchaVerification = () => {
  const [captchaText, setCaptchaText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [message, setMessage] = useState('');

  const generateCaptcha = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setCaptchaText(result);
    setUserInput('');
    setMessage('');
    setIsVerified(false);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleVerify = () => {
    if (userInput.toLowerCase() === captchaText.toLowerCase()) {
      setIsVerified(true);
      setMessage('Verification successful!');
    } else {
      setMessage('Incorrect captcha. Please try again.');
      generateCaptcha();
    }
  };

  return (
    <div id="CaptchaVerification_1" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-96 space-y-6">
        <h2 id="CaptchaVerification_2" className="text-2xl font-bold text-center text-gray-800 mb-6">Captcha Verification</h2>
        
        <div id="CaptchaVerification_3" className="relative">
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="select-none text-2xl font-bold tracking-wider text-gray-700
              bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200
              p-4 rounded-md text-center
              transform skew-x-12 line-through">
              {captchaText}
            </div>
          </div>
          
          <button
            id="CaptchaVerification_4"
            onClick={generateCaptcha}
            className="absolute -right-2 top-1/2 -translate-y-1/2 bg-blue-500 p-2 rounded-full
              hover:bg-blue-600 transition-colors duration-300"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>

        <div id="CaptchaVerification_5" className="space-y-4">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Enter captcha text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none
              focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          
          <button
            onClick={handleVerify}
            disabled={isVerified}
            className={`w-full py-2 rounded-md text-white font-medium
              ${isVerified ? 'bg-green-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}
              transition-colors duration-300`}
          >
            {isVerified ? 'Verified' : 'Verify'}
          </button>
        </div>

        {message && (
          <div id="CaptchaVerification_6" 
            className={`text-center p-2 rounded ${isVerified ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default CaptchaVerification;