import React from 'react';

const DashboardOverview = ({ orderStats, stockAlerts }) => {
  return (
    <div id="DashboardOverview_1" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <div id="DashboardOverview_2" className="bg-white p-6 rounded-lg shadow-md">
        <h2 id="DashboardOverview_3" className="text-xl font-semibold mb-4">Recent Orders</h2>
        <div id="DashboardOverview_4" className="text-3xl font-bold text-blue-600">
          {orderStats.total || 0}
        </div>
        <p id="DashboardOverview_5" className="text-gray-600">Total Orders</p>
      </div>

      <div id="DashboardOverview_6" className="bg-white p-6 rounded-lg shadow-md">
        <h2 id="DashboardOverview_7" className="text-xl font-semibold mb-4">Low Stock Alerts</h2>
        <div id="DashboardOverview_8" className="text-3xl font-bold text-red-600">
          {stockAlerts.length || 0}
        </div>
        <p id="DashboardOverview_9" className="text-gray-600">Products Need Attention</p>
      </div>

      <div id="DashboardOverview_10" className="bg-white p-6 rounded-lg shadow-md">
        <h2 id="DashboardOverview_11" className="text-xl font-semibold mb-4">Revenue</h2>
        <div id="DashboardOverview_12" className="text-3xl font-bold text-green-600">
          ${orderStats.revenue || 0}
        </div>
        <p id="DashboardOverview_13" className="text-gray-600">Total Revenue</p>
      </div>
    </div>
  );
};

export default DashboardOverview;