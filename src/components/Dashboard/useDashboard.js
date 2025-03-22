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
      const response = await fetch('/api/user/properties', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (!response.ok) throw new Error('Failed to fetch properties');
      const data = await response.json();
      setProperties(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/properties/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (!response.ok) throw new Error('Failed to delete property');
      setProperties(properties.filter(prop => prop.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = async (property) => {
    try {
      const response = await fetch(`/api/properties/${property.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(property)
      });
      if (!response.ok) throw new Error('Failed to update property');
      const updatedProperty = await response.json();
      setProperties(properties.map(prop => 
        prop.id === property.id ? updatedProperty : prop
      ));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleAdd = async (propertyData) => {
    try {
      const response = await fetch('/api/properties', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(propertyData)
      });
      if (!response.ok) throw new Error('Failed to add property');
      const newProperty = await response.json();
      setProperties([...properties, newProperty]);
    } catch (err) {
      setError(err.message);
    }
  };

  return {
    properties,
    loading,
    error,
    handleDelete,
    handleEdit,
    handleAdd
  };
};

export default useDashboard;