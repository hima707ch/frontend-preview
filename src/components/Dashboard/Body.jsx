import React from 'react';
import PropertyManagement from './PropertyManagement';
import UserInfoPanel from './UserInfoPanel';
import { useDashboard } from './useDashboard';

export const Body = () => {
  const { userRole, isLoading, error } = useDashboard();

  if (isLoading) return <div id="Body_1" className="flex items-center justify-center h-screen"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div></div>;
  if (error) return <div id="Body_2" className="text-red-500 text-center p-4">{error}</div>;

  return (
    <div id="Body_3" className="container mx-auto px-4 py-8">
      <h1 id="Body_4" className="text-3xl font-bold mb-8">Dashboard</h1>
      <div id="Body_5" className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div id="Body_6" className="md:col-span-4">
          <UserInfoPanel userRole={userRole} />
        </div>
        <div id="Body_7" className="md:col-span-8">
          <PropertyManagement userRole={userRole} />
        </div>
      </div>
    </div>
  );
};
