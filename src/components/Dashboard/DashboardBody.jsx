import React from 'react';
import { BuyerPanel } from './BuyerPanel';
import { SellerPanel } from './SellerPanel';
import { useDashboard } from './useDashboard';

export const DashboardBody = () => {
  const { userRole, isLoading, error } = useDashboard();

  if (isLoading) {
    return (
      <div id="DashboardBody_1" className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div id="DashboardBody_2" className="flex items-center justify-center min-h-screen">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div id="DashboardBody_3" className="container mx-auto px-4 py-8">
      <h1 id="DashboardBody_4" className="text-3xl font-bold mb-8">Dashboard</h1>
      {userRole === 'buyer' ? <BuyerPanel /> : <SellerPanel />}
    </div>
  );
}