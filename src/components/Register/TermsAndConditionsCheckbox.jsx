import React, { useState } from 'react';

const TermsAndConditionsCheckbox = ({ onAccept }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (onAccept) {
      onAccept(!isChecked);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex items-start space-x-2">
        <input
          type="checkbox"
          id="TermsAndConditions_1"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer transition-all duration-200 hover:scale-110"
        />
        <label htmlFor="TermsAndConditions_1" className="text-sm text-gray-600">
          I agree to the
          <button
            onClick={() => setShowTerms(!showTerms)}
            className="mx-1 text-blue-600 hover:text-blue-800 underline font-medium transition-colors duration-200"
            id="TermsAndConditions_2"
          >
            Terms and Conditions
          </button>
          and Privacy Policy
        </label>
      </div>

      {showTerms && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg shadow-md" id="TermsAndConditions_3">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Terms and Conditions</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>1. By using our service, you agree to comply with these terms and conditions.</p>
            <p>2. You must be at least 18 years old to use our services.</p>
            <p>3. We reserve the right to modify or terminate services at any time.</p>
            <p>4. Your privacy is important to us. We handle your data according to our Privacy Policy.</p>
            <p>5. You are responsible for maintaining the confidentiality of your account.</p>
          </div>
          <button
            onClick={() => setShowTerms(false)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
            id="TermsAndConditions_4"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default TermsAndConditionsCheckbox;