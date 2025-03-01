import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const DashboardWidgets = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalSales: 0,
    activeProducts: 0,
    monthlyRevenue: 0
  });

  useEffect(() => {
    // Simulated API call
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/dashboard/stats');
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };
    fetchStats();
  }, []);

  return (
    <div id="DashboardWidgets_1" className="p-6 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div id="DashboardWidgets_2" className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white text-sm font-medium">Total Users</p>
              <h3 className="text-white text-2xl font-bold mt-2">{stats.totalUsers.toLocaleString()}</h3>
            </div>
            <div className="bg-blue-400 rounded-full p-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-blue-100 text-sm">↑ 12% from last month</p>
          </div>
        </div>

        <div id="DashboardWidgets_3" className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white text-sm font-medium">Total Sales</p>
              <h3 className="text-white text-2xl font-bold mt-2">${stats.totalSales.toLocaleString()}</h3>
            </div>
            <div className="bg-green-400 rounded-full p-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-green-100 text-sm">↑ 8% from last month</p>
          </div>
        </div>

        <div id="DashboardWidgets_4" className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white text-sm font-medium">Active Products</p>
              <h3 className="text-white text-2xl font-bold mt-2">{stats.activeProducts.toLocaleString()}</h3>
            </div>
            <div className="bg-purple-400 rounded-full p-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-purple-100 text-sm">↑ 5% from last month</p>
          </div>
        </div>

        <div id="DashboardWidgets_5" className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white text-sm font-medium">Monthly Revenue</p>
              <h3 className="text-white text-2xl font-bold mt-2">${stats.monthlyRevenue.toLocaleString()}</h3>
            </div>
            <div className="bg-red-400 rounded-full p-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-red-100 text-sm">↑ 15% from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardWidgets;