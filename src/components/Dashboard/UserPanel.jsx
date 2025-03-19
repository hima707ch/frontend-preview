import React from 'react';
import { useUserPanel } from './useUserPanel';

const UserPanel = () => {
  const { userData } = useUserPanel();

  return (
    <div id="UserPanel_1" className="bg-white rounded-lg shadow p-6">
      <h3 id="UserPanel_2" className="text-2xl font-semibold mb-4">Profile Information</h3>
      <div id="UserPanel_3" className="space-y-4">
        <div className="flex items-center">
          <span className="font-medium w-32">Username:</span>
          <span>{userData.username}</span>
        </div>
        <div className="flex items-center">
          <span className="font-medium w-32">Role:</span>
          <span className="capitalize">{userData.role}</span>
        </div>
      </div>
    </div>
  );
};

export default UserPanel;