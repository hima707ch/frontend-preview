import React from 'react';
import { useUserInfo } from './useUserInfo';

const UserInfoPanel = ({ userRole }) => {
  const { userData } = useUserInfo();

  return (
    <div id="UserInfo_1" className="bg-white rounded-lg shadow p-6">
      <div id="UserInfo_2" className="text-center mb-6">
        <div id="UserInfo_3" className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
          <span id="UserInfo_4" className="text-2xl text-gray-600">{userData.username?.[0]?.toUpperCase()}</span>
        </div>
        <h2 id="UserInfo_5" className="text-xl font-semibold">{userData.username}</h2>
        <p id="UserInfo_6" className="text-gray-600 capitalize">{userRole}</p>
      </div>

      <div id="UserInfo_7" className="space-y-4">
        {userRole === 'seller' && (
          <div id="UserInfo_8" className="space-y-2">
            <h3 id="UserInfo_9" className="font-semibold">Quick Actions</h3>
            <button
              id="UserInfo_10"
              onClick={() => window.location.href = '/add-property'}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
            >
              Add New Property
            </button>
          </div>
        )}
        
        <div id="UserInfo_11" className="border-t pt-4">
          <h3 id="UserInfo_12" className="font-semibold mb-2">Account Info</h3>
          <div id="UserInfo_13" className="text-sm space-y-2">
            <p id="UserInfo_14" className="flex justify-between">
              <span>Account Type:</span>
              <span className="font-medium capitalize">{userRole}</span>
            </p>
            <p id="UserInfo_15" className="flex justify-between">
              <span>Member Since:</span>
              <span className="font-medium">{userData.joinDate}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoPanel;
