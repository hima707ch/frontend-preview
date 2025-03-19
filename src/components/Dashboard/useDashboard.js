import { useState, useEffect } from 'react';

const useDashboard = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
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
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`/api/properties/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) throw new Error('Failed to delete property');
      
      setProperties(properties.filter(prop => prop.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = async (propertyData) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`/api/properties/edit/${propertyData.id}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(propertyData)
      });

      if (!response.ok) throw new Error('Failed to update property');
      
      const updatedProperty = await response.json();
      setProperties(properties.map(prop => 
        prop.id === updatedProperty.id ? updatedProperty : prop
      ));
    } catch (err) {
      setError(err.message);
    }
  };

  return { properties, loading, error, handleDelete, handleEdit };
};

export default useDashboard;