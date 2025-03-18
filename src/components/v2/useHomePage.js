import { useState, useEffect } from 'react';

const useHomePage = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await fetch('/properties');
      if (!response.ok) {
        throw new Error('Failed to fetch properties');
      }
      const data = await response.json();
      setProperties(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return { properties, loading, error };
};

export default useHomePage;