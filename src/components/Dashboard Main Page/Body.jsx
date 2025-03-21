import React from 'react';
import DashboardOverview from './DashboardOverview';
import NavigationCards from './NavigationCards';
import { useDashboard } from './useDashboard';

const Body = () => {
  const { orderStats, stockAlerts, isLoading, error } = useDashboard();

  if (isLoading) return (
    <div id="Body_1" className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  if (error) return (
    <div id="Body_2" className="text-red-500 text-center p-4">{error}</div>
  );

  return (
    <div id="Body_3" className="p-6 bg-gray-100 min-h-screen">
      <h1 id="Body_4" className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
      <DashboardOverview orderStats={orderStats} stockAlerts={stockAlerts} />
      <NavigationCards />
    </div>
  );
};

export default Body;