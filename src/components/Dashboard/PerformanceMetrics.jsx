import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const PerformanceMetrics = () => {
  const [metrics, setMetrics] = useState({
    totalSales: 0,
    avgOrderValue: 0,
    conversionRate: 0,
    customerSatisfaction: 0
  });

  useEffect(() => {
    fetchMetrics();
  }, []);

  const fetchMetrics = async () => {
    try {
      const response = await fetch('/api/metrics');
      const data = await response.json();
      setMetrics(data);
    } catch (error) {
      console.error('Error fetching metrics:', error);
    }
  };

  return (
    <div id="PerformanceMetrics_1" className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen">
      <h2 id="PerformanceMetrics_2" className="text-4xl font-bold text-white mb-8 text-center">Performance Dashboard</h2>
      
      <div id="PerformanceMetrics_3" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div id="PerformanceMetrics_4" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-200">Total Sales</h3>
            <div className="p-2 bg-green-500/20 rounded-lg">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <p className="text-3xl font-bold text-white mt-4">${metrics.totalSales.toLocaleString()}</p>
          <p className="text-green-500 text-sm mt-2">+12.5% from last month</p>
        </div>

        <div id="PerformanceMetrics_5" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-200">Avg Order Value</h3>
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <p className="text-3xl font-bold text-white mt-4">${metrics.avgOrderValue}</p>
          <p className="text-blue-500 text-sm mt-2">+5.2% from last month</p>
        </div>

        <div id="PerformanceMetrics_6" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-200">Conversion Rate</h3>
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>
          <p className="text-3xl font-bold text-white mt-4">{metrics.conversionRate}%</p>
          <p className="text-purple-500 text-sm mt-2">+2.1% from last month</p>
        </div>

        <div id="PerformanceMetrics_7" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-200">Customer Satisfaction</h3>
            <div className="p-2 bg-yellow-500/20 rounded-lg">
              <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <p className="text-3xl font-bold text-white mt-4">{metrics.customerSatisfaction}%</p>
          <p className="text-yellow-500 text-sm mt-2">+1.8% from last month</p>
        </div>
      </div>

      <div id="PerformanceMetrics_8" className="mt-12 bg-white/5 backdrop-blur-lg rounded-xl p-6">
        <h3 className="text-2xl font-semibold text-white mb-6">Performance Trends</h3>
        <div className="h-64 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-green-500/20 rounded-lg p-4">
          {/* Chart placeholder */}
          <div className="flex items-end justify-between h-full">
            <div className="w-8 bg-purple-500 rounded-t-lg" style={{height: '60%'}}></div>
            <div className="w-8 bg-purple-500 rounded-t-lg" style={{height: '75%'}}></div>
            <div className="w-8 bg-purple-500 rounded-t-lg" style={{height: '65%'}}></div>
            <div className="w-8 bg-blue-500 rounded-t-lg" style={{height: '80%'}}></div>
            <div className="w-8 bg-blue-500 rounded-t-lg" style={{height: '85%'}}></div>
            <div className="w-8 bg-blue-500 rounded-t-lg" style={{height: '75%'}}></div>
            <div className="w-8 bg-green-500 rounded-t-lg" style={{height: '90%'}}></div>
            <div className="w-8 bg-green-500 rounded-t-lg" style={{height: '95%'}}></div>
            <div className="w-8 bg-green-500 rounded-t-lg" style={{height: '88%'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;