import React, { useState } from 'react';

const PrivacyPolicyCheckbox = ({ onAccept }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (onAccept) {
      onAccept(!isChecked);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4" id="PrivacyPolicyCheckbox_1">
      <div className="flex items-start space-x-2">
        <input
          type="checkbox"
          id="PrivacyPolicyCheckbox_2"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer transition-all duration-200 ease-in-out"
        />
        <label htmlFor="privacy" className="text-sm text-gray-600" id="PrivacyPolicyCheckbox_3">
          I agree to the{' '}
          <button
            onClick={() => setShowPolicy(!showPolicy)}
            className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors duration-200"
            id="PrivacyPolicyCheckbox_4"
          >
            Privacy Policy
          </button>
        </label>
      </div>

      {showPolicy && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200" id="PrivacyPolicyCheckbox_5">
          <h3 className="text-lg font-semibold mb-2 text-gray-800" id="PrivacyPolicyCheckbox_6">Privacy Policy</h3>
          <div className="text-sm text-gray-600 space-y-2" id="PrivacyPolicyCheckbox_7">
            <p>We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we handle your personal information.</p>
            <p>1. We collect and process your personal data only with your consent and for specified purposes.</p>
            <p>2. Your data is stored securely and is only accessible to authorized personnel.</p>
            <p>3. We do not share your personal information with third parties without your explicit consent.</p>
            <p>4. You have the right to access, modify, or delete your personal data at any time.</p>
          </div>
          <button
            onClick={() => setShowPolicy(false)}
            className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
            id="PrivacyPolicyCheckbox_8"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default PrivacyPolicyCheckbox;