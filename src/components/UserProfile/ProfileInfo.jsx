import React from 'react';
import images from '../assets/images';

const ProfileInfo = ({ userData }) => {
  return (
    <div id="ProfileInfo_1" className="bg-white rounded-lg shadow-md p-6">
      <div id="ProfileInfo_2" className="flex items-center mb-6">
        <img
          id="ProfileInfo_3"
          src={images[0] || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        />
        <div id="ProfileInfo_4" className="ml-4">
          <h2 id="ProfileInfo_5" className="text-2xl font-semibold text-gray-800">{userData.username}</h2>
          <p id="ProfileInfo_6" className="text-gray-600">{userData.email}</p>
        </div>
      </div>
      <div id="ProfileInfo_7" className="space-y-4">
        <div id="ProfileInfo_8" className="flex items-center">
          <span id="ProfileInfo_9" className="text-gray-600 w-24">Name:</span>
          <span id="ProfileInfo_10" className="text-gray-800">{userData.name}</span>
        </div>
        <div id="ProfileInfo_11" className="flex items-center">
          <span id="ProfileInfo_12" className="text-gray-600 w-24">Phone:</span>
          <span id="ProfileInfo_13" className="text-gray-800">{userData.phone}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;