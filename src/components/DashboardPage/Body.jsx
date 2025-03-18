import React from 'react';
import UserStats from './UserStats';
import PropertyList from './PropertyList';
import ActivityFeed from './ActivityFeed';
import { useDashboard } from './useDashboard';

const Body = () => {
  const { userInfo, properties, activities, loading, error } = useDashboard();

  if (loading) return <div id="Dashboard_1" className="flex items-center justify-center h-screen"><div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div></div>;
  if (error) return <div id="Dashboard_2" className="text-red-500 text-center p-4">{error}</div>;

  return (
    <div id="Dashboard_3" className="flex min-h-screen bg-gray-100">
      <div id="Dashboard_4" className="flex-1 p-8">
        <h1 id="Dashboard_5" className="text-3xl font-bold text-gray-800 mb-8">Welcome, {userInfo?.username}</h1>
        <div id="Dashboard_6" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UserStats userInfo={userInfo} />
          <PropertyList properties={properties} />
          <ActivityFeed activities={activities} />
        </div>
      </div>
    </div>
  );
};

export default Body;