import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const RecentActivities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const response = await fetch('api/activities');
      const data = await response.json();
      setActivities(data);
    } catch (error) {
      const dummyActivities = [
        {
          id: 1,
          user: 'John Doe',
          action: 'completed task',
          project: 'Website Redesign',
          timestamp: '2 hours ago',
          avatar: images[0]
        },
        {
          id: 2,
          user: 'Jane Smith',
          action: 'commented on',
          project: 'Mobile App Development',
          timestamp: '4 hours ago',
          avatar: images[1]
        },
        {
          id: 3,
          user: 'Mike Johnson',
          action: 'created new task',
          project: 'Database Migration',
          timestamp: '6 hours ago',
          avatar: images[2]
        }
      ];
      setActivities(dummyActivities);
    }
  };

  return (
    <div id="RecentActivities_1" className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <h2 id="RecentActivities_2" className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">Recent Activities</h2>
      <div id="RecentActivities_3" className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            id={`RecentActivities_${activity.id + 3}`}
            className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition duration-300"
          >
            <img
              src={activity.avatar}
              alt={activity.user}
              className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
            />
            <div className="flex-1">
              <p className="text-gray-800">
                <span className="font-semibold">{activity.user}</span>
                <span className="text-gray-600"> {activity.action} </span>
                <span className="text-blue-600 font-medium">{activity.project}</span>
              </p>
              <p className="text-sm text-gray-500">{activity.timestamp}</p>
            </div>
            <button
              className="px-4 py-2 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-full transition duration-300"
              onClick={() => console.log(`View details of activity ${activity.id}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
      <button
        id="RecentActivities_7"
        className="mt-6 w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition duration-300 font-medium shadow-md"
        onClick={() => console.log('Load more activities')}
      >
        Load More Activities
      </button>
    </div>
  );
};

export default RecentActivities;