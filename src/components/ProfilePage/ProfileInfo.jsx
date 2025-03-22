import React from 'react';
import images from '../assets/images';

const ProfileInfo = ({ userProfile, onEdit }) => {
  return (
    <div id="ProfileInfo_1" className="bg-white rounded-lg shadow-md p-6">
      <div id="ProfileInfo_2" className="flex items-center mb-6">
        <img
          id="ProfileInfo_3"
          src={images[0] || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover"
        />
        <div id="ProfileInfo_4" className="ml-6">
          <h2 id="ProfileInfo_5" className="text-2xl font-semibold text-gray-800">{userProfile.username}</h2>
          <span id="ProfileInfo_6" className="text-gray-600 capitalize">{userProfile.role}</span>
        </div>
      </div>
      
      <div id="ProfileInfo_7" className="space-y-4">
        <div id="ProfileInfo_8" className="flex border-b border-gray-200 pb-3">
          <span id="ProfileInfo_9" className="font-medium w-32 text-gray-600">Email:</span>
          <span id="ProfileInfo_10" className="text-gray-800">{userProfile.email}</span>
        </div>
        <div id="ProfileInfo_11" className="flex border-b border-gray-200 pb-3">
          <span id="ProfileInfo_12" className="font-medium w-32 text-gray-600">Phone:</span>
          <span id="ProfileInfo_13" className="text-gray-800">{userProfile.phone}</span>
        </div>
      </div>

      <button
        id="ProfileInfo_14"
        onClick={onEdit}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileInfo;