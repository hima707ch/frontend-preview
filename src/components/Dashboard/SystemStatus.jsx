import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const SystemStatus = () => {
  const [stats, setStats] = useState({
    cpu: 0,
    memory: 0,
    disk: 0,
    network: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/system/stats');
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error('Error fetching system stats:', error);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="SystemStatus_1" className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div id="SystemStatus_2" className="max-w-4xl mx-auto">
        <h1 id="SystemStatus_3" className="text-4xl font-bold text-white mb-8 text-center">System Status Monitor</h1>
        
        <div id="SystemStatus_4" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div id="SystemStatus_5" className="bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-blue-400">CPU Usage</h2>
              <span className="text-2xl text-white">{stats.cpu}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div 
                className="bg-blue-500 h-4 rounded-full transition-all duration-500"
                style={{ width: `${stats.cpu}%` }}
              ></div>
            </div>
          </div>

          <div id="SystemStatus_6" className="bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-green-400">Memory Usage</h2>
              <span className="text-2xl text-white">{stats.memory}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div 
                className="bg-green-500 h-4 rounded-full transition-all duration-500"
                style={{ width: `${stats.memory}%` }}
              ></div>
            </div>
          </div>

          <div id="SystemStatus_7" className="bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-purple-400">Disk Usage</h2>
              <span className="text-2xl text-white">{stats.disk}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div 
                className="bg-purple-500 h-4 rounded-full transition-all duration-500"
                style={{ width: `${stats.disk}%` }}
              ></div>
            </div>
          </div>

          <div id="SystemStatus_8" className="bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-orange-400">Network Usage</h2>
              <span className="text-2xl text-white">{stats.network}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div 
                className="bg-orange-500 h-4 rounded-full transition-all duration-500"
                style={{ width: `${stats.network}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div id="SystemStatus_9" className="mt-8 bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-semibold text-white mb-4">System Health</h2>
          <div className="flex items-center space-x-4">
            <div className="flex-1 text-center p-4 bg-gray-700 rounded-lg">
              <span className={`text-2xl ${stats.cpu > 80 ? 'text-red-500' : 'text-green-500'}`}>
                {stats.cpu > 80 ? '⚠️' : '✅'}
              </span>
              <p className="text-gray-300 mt-2">CPU Status</p>
            </div>
            <div className="flex-1 text-center p-4 bg-gray-700 rounded-lg">
              <span className={`text-2xl ${stats.memory > 80 ? 'text-red-500' : 'text-green-500'}`}>
                {stats.memory > 80 ? '⚠️' : '✅'}
              </span>
              <p className="text-gray-300 mt-2">Memory Status</p>
            </div>
            <div className="flex-1 text-center p-4 bg-gray-700 rounded-lg">
              <span className={`text-2xl ${stats.disk > 80 ? 'text-red-500' : 'text-green-500'}`}>
                {stats.disk > 80 ? '⚠️' : '✅'}
              </span>
              <p className="text-gray-300 mt-2">Disk Status</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemStatus;