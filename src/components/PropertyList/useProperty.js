import { useState, useEffect } from 'react';
import axios from 'axios';

export const useProperty = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('/properties');
        setProperties(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch properties. Please try again later.');
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return { properties, loading, error };
};