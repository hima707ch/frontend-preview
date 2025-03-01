import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const NotificationsPanel = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await fetch('/api/notifications');
      const data = await response.json();
      setNotifications(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching notifications:', error);
      setLoading(false);
    }
  };

  const markAsRead = async (id) => {
    try {
      await fetch(`/api/notifications/${id}/read`, {
        method: 'PUT'
      });
      setNotifications(notifications.map(notif =>
        notif.id === id ? { ...notif, read: true } : notif
      ));
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  if (loading) {
    return (
      <div id="NotificationsPanel_1" className="p-4 bg-white rounded-lg shadow-lg">
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((n) => (
            <div key={n} className="h-16 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div id="NotificationsPanel_2" className="w-96 max-h-[600px] overflow-y-auto bg-white rounded-lg shadow-xl">
      <div id="NotificationsPanel_3" className="sticky top-0 bg-gradient-to-r from-purple-600 to-blue-500 p-4 text-white">
        <h2 className="text-xl font-semibold">Notifications</h2>
      </div>

      {notifications.length === 0 ? (
        <div id="NotificationsPanel_4" className="p-6 text-center text-gray-500">
          <div className="mb-4">
            <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
          <p className="text-lg">No new notifications</p>
        </div>
      ) : (
        <div id="NotificationsPanel_5" className="divide-y divide-gray-100">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 hover:bg-gray-50 transition-colors duration-150 ${notification.read ? 'opacity-75' : ''}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <img
                    src={images[0] || 'https://placekitten.com/40/40'}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{notification.title}</p>
                  <p className="text-sm text-gray-500 mt-1">{notification.message}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-xs text-gray-400">
                      {new Date(notification.timestamp).toLocaleDateString()}
                    </span>
                    {!notification.read && (
                      <button
                        onClick={() => markAsRead(notification.id)}
                        className="text-xs text-blue-500 hover:text-blue-700 transition-colors duration-150"
                      >
                        Mark as read
                      </button>
                    )}
                  </div>
                </div>
                {!notification.read && (
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <div id="NotificationsPanel_6" className="sticky bottom-0 bg-gradient-to-r from-purple-600 to-blue-500 p-3 text-center">
        <button className="text-white hover:text-gray-200 transition-colors duration-150">
          Clear all notifications
        </button>
      </div>
    </div>
  );
};

export default NotificationsPanel;