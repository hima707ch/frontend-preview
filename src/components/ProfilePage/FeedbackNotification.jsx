import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeedbackNotification = () => {
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });
  const [loading, setLoading] = useState(false);

  const updateProfile = async (userData) => {
    setLoading(true);
    try {
      const response = await axios.put('/api/user/profile', userData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      showNotification('Profile updated successfully!', 'success');
    } catch (error) {
      showNotification(error.response?.data?.message || 'Update failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => setNotification({ show: false, message: '', type: '' }), 3000);
  };

  return (
    <div id="FeedbackNotification_1" className="fixed top-4 right-4 z-50">
      {notification.show && (
        <div
          id="FeedbackNotification_2"
          className={`${notification.type === 'success' ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-red-500 to-red-600'} rounded-lg shadow-lg p-4 min-w-[300px] transform transition-all duration-300 ease-in-out animate-slide-in`}
        >
          <div id="FeedbackNotification_3" className="flex items-center space-x-2">
            {notification.type === 'success' ? (
              <svg id="FeedbackNotification_4" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg id="FeedbackNotification_5" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
            <p id="FeedbackNotification_6" className="text-white font-semibold">{notification.message}</p>
          </div>
        </div>
      )}
      {loading && (
        <div id="FeedbackNotification_7" className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div id="FeedbackNotification_8" className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
    </div>
  );
};

export default FeedbackNotification;