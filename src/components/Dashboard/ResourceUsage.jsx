import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const ResourceUsage = () => {
  const [resources, setResources] = useState([
    { id: 'ResourceUsage_1', name: 'CPU Usage', value: 65, color: 'bg-blue-500' },
    { id: 'ResourceUsage_2', name: 'Memory Usage', value: 82, color: 'bg-green-500' },
    { id: 'ResourceUsage_3', name: 'Storage Usage', value: 45, color: 'bg-purple-500' },
    { id: 'ResourceUsage_4', name: 'Network Usage', value: 73, color: 'bg-yellow-500' }
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/resources');
        const data = await response.json();
        setResources(data);
      } catch (error) {
        console.error('Error fetching resource data:', error);
      }
    };

    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="ResourceUsage_5" className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen">
      <h2 id="ResourceUsage_6" className="text-3xl font-bold text-white mb-8 text-center">System Resource Monitor</h2>
      
      <div id="ResourceUsage_7" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className="bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 shadow-xl"
          >
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold text-white mb-4">{resource.name}</h3>
              <div className="relative w-32 h-32">
                <svg className="transform -rotate-90 w-32 h-32">
                  <circle
                    cx="64"
                    cy="64"
                    r="60"
                    className="stroke-current text-gray-700"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="60"
                    className={`stroke-current ${resource.color}`}
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 60}`}
                    strokeDashoffset={`${2 * Math.PI * 60 * (1 - resource.value / 100)}`}
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="text-2xl font-bold text-white">{resource.value}%</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div id="ResourceUsage_8" className="mt-12 bg-gray-800 rounded-lg p-6">
        <h3 className="text-2xl font-semibold text-white mb-6">Resource History</h3>
        <div className="h-64 flex items-end space-x-2">
          {[...Array(24)].map((_, index) => {
            const height = Math.random() * 100;
            return (
              <div
                key={`bar-${index}`}
                className="flex-1 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-md hover:from-blue-600 hover:to-blue-400 transition-colors duration-300"
                style={{ height: `${height}%` }}
              ></div>
            );
          })}
        </div>
        <div className="flex justify-between mt-2 text-gray-400 text-sm">
          <span>24 hours ago</span>
          <span>Now</span>
        </div>
      </div>
    </div>
  );
};

export default ResourceUsage;