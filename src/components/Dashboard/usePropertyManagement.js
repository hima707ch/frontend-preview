import { useState, useEffect } from 'react';

export const usePropertyManagement = () => {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/properties/list', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) throw new Error('Failed to fetch properties');
      
      const data = await response.json();
      setProperties(data);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  const deleteProperty = async (propertyId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`/api/properties/delete/${propertyId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) throw new Error('Failed to delete property');

      setProperties(properties.filter(prop => prop.id !== propertyId));
    } catch (err) {
      setError(err.message);
    }
  };

  return { properties, deleteProperty, isLoading, error };
};
