import React from 'react';

const ActivityFeed = ({ activities }) => {
  return (
    <div id="Dashboard_20" className="bg-white rounded-lg shadow p-6">
      <h2 id="Dashboard_21" className="text-xl font-semibold mb-4">Recent Activity</h2>
      <div id="Dashboard_22" className="space-y-4">
        {activities?.map((activity) => (
          <div key={activity.id} id="Dashboard_23" className="flex items-center space-x-3">
            <div id="Dashboard_24" className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <p id="Dashboard_25" className="text-gray-600">{activity.description}</p>
            <span id="Dashboard_26" className="text-sm text-gray-500">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;