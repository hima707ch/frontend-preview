import React from 'react';

const UserStats = ({ userInfo }) => {
  return (
    <div id="Dashboard_7" className="bg-white rounded-lg shadow p-6">
      <h2 id="Dashboard_8" className="text-xl font-semibold mb-4">Account Overview</h2>
      <div id="Dashboard_9" className="space-y-4">
        <div id="Dashboard_10" className="flex justify-between items-center">
          <span className="text-gray-600">Role</span>
          <span className="font-medium">{userInfo?.role}</span>
        </div>
        <div id="Dashboard_11" className="flex justify-between items-center">
          <span className="text-gray-600">Email</span>
          <span className="font-medium">{userInfo?.email}</span>
        </div>
        <div id="Dashboard_12" className="flex justify-between items-center">
          <span className="text-gray-600">Member Since</span>
          <span className="font-medium">{new Date(userInfo?.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default UserStats;