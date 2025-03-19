import { useState, useEffect } from 'react';

export const useBuyerPanel = () => {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('/api/properties/list', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return { properties, isLoading };
}