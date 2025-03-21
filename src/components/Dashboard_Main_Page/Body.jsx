import React from 'react';
import DashboardNav from './DashboardNav';
import PropertyList from './PropertyList';
import QuickActions from './QuickActions';
import { useDashboard } from './useDashboard';

const Body = () => {
  const { properties, loading, error } = useDashboard();

  if (loading) return (
    <div id="Body_1" className="min-h-screen bg-gray-100 p-4">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (error) return (
    <div id="Body_2" className="min-h-screen bg-gray-100 p-4">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        {error}
      </div>
    </div>
  );

  return (
    <div id="Body_3" className="min-h-screen bg-gray-100">
      <DashboardNav />
      <main className="container mx-auto px-4 py-8">
        <h1 id="Body_4" className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <QuickActions />
          <PropertyList properties={properties} />
        </div>
      </main>
    </div>
  );
};

export default Body;