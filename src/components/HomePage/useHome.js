import { useState, useEffect } from 'react';

export default function useHome() {
  const [properties, setProperties] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);

    const fetchProperties = async () => {
      try {
        const response = await fetch('/api/properties/list', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) throw new Error('Failed to fetch properties');

        const data = await response.json();
        setProperties(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return { isLoggedIn, properties, loading, error };
}