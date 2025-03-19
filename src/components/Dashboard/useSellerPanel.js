import { useState, useEffect } from 'react';

export const useSellerPanel = () => {
  const [properties, setProperties] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

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
      const data = await response.json();
      setProperties(data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  const handleAddProperty = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const formData = new FormData(e.target);
      const propertyData = {
        title: formData.get('title'),
        description: formData.get('description'),
        price: Number(formData.get('price')),
        location: formData.get('location')
      };

      await fetch('/api/properties/add', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(propertyData)
      });

      setShowAddForm(false);
      fetchProperties();
    } catch (error) {
      console.error('Error adding property:', error);
    }
  };

  const handleEditProperty = async (id) => {
    // Implementation for editing property
  };

  const handleDeleteProperty = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await fetch(`/api/properties/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      fetchProperties();
    } catch (error) {
      console.error('Error deleting property:', error);
    }
  };

  return {
    properties,
    handleAddProperty,
    handleEditProperty,
    handleDeleteProperty,
    showAddForm,
    setShowAddForm
  };
}