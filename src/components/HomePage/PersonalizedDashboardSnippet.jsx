import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const PersonalizedDashboardSnippet = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user/profile', {
          headers: {
            'Authorization': 'Bearer TOKEN',
          }
        });
        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div id="PersonalizedDashboardSnippet_1" className="flex items-center justify-center h-48">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div id="PersonalizedDashboardSnippet_2" className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-6 max-w-md mx-auto hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center gap-4 mb-6">
        <img
          id="PersonalizedDashboardSnippet_3"
          src={images[0]}
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{userData?.name || 'John Doe'}</h2>
          <p className="text-sm text-gray-600">{userData?.email || 'john@example.com'}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div id="PersonalizedDashboardSnippet_4" className="bg-white p-4 rounded-lg shadow-sm hover:bg-blue-50 transition-colors duration-200">
          <h3 className="text-md font-medium text-gray-700 mb-2">Recent Activity</h3>
          <div className="space-y-2">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                <p>Activity {item} - {new Date().toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="PersonalizedDashboardSnippet_5" className="bg-white p-4 rounded-lg shadow-sm hover:bg-blue-50 transition-colors duration-200">
          <h3 className="text-md font-medium text-gray-700 mb-2">Quick Stats</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">12</p>
              <p className="text-xs text-gray-500">Projects</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">48</p>
              <p className="text-xs text-gray-500">Tasks</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">86%</p>
              <p className="text-xs text-gray-500">Complete</p>
            </div>
          </div>
        </div>

        <button
          id="PersonalizedDashboardSnippet_6"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <span>View Full Dashboard</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PersonalizedDashboardSnippet;