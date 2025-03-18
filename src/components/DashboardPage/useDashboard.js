import { useState, useEffect } from 'react';

export const useDashboard = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [properties, setProperties] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');

        if (!token || !userId) {
          throw new Error('Authentication required');
        }

        const userResponse = await fetch(`/api/users/${userId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!userResponse.ok) {
          throw new Error('Failed to fetch user data');
        }

        const userData = await userResponse.json();
        setUserInfo(userData);

        const propertiesResponse = await fetch('/api/properties/list', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!propertiesResponse.ok) {
          throw new Error('Failed to fetch properties');
        }

        const propertiesData = await propertiesResponse.json();
        setProperties(propertiesData);

        // Mock activity data (replace with actual API endpoint when available)
        setActivities([
          { id: 1, description: 'New property listed', time: '2h ago' },
          { id: 2, description: 'Received new offer', time: '5h ago' },
          { id: 3, description: 'Property view request', time: '1d ago' }
        ]);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return { userInfo, properties, activities, loading, error };
};