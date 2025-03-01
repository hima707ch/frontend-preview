import React, { useState } from 'react';

export default function DateOfBirthInput() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDob(selectedDate);
    setAge(calculateAge(selectedDate));
  };

  return (
    <div id="DateOfBirthInput_1" className="max-w-md mx-auto p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl shadow-lg">
      <div className="space-y-4">
        <label className="block text-lg font-semibold text-gray-700" id="DateOfBirthInput_2">
          Date of Birth
        </label>
        <input
          id="DateOfBirthInput_3"
          type="date"
          value={dob}
          onChange={handleDateChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 hover:border-purple-400"
        />
        {age !== null && (
          <div id="DateOfBirthInput_4" className="mt-4 p-4 bg-white rounded-lg shadow-sm border border-purple-100">
            <p className="text-gray-700">
              Your age is: <span className="font-bold text-purple-600">{age} years</span>
            </p>
          </div>
        )}
        <div id="DateOfBirthInput_5" className="text-sm text-gray-500 mt-2">
          Please select your date of birth from the calendar above
        </div>
      </div>
    </div>
  );
}