import { useState, useEffect } from 'react';

const usePropertyManager = () => {
  const [properties, setProperties] = useState([]);
  const [editingProperty, setEditingProperty] = useState(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

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

  const handleEdit = (property) => {
    setEditingProperty(property);
  };

  const handleDelete = (id) => {
    setDeleteConfirmId(id);
  };

  const handleConfirmDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      await fetch(`/api/properties/delete/${deleteConfirmId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setProperties(properties.filter(p => p.id !== deleteConfirmId));
      setDeleteConfirmId(null);
    } catch (error) {
      console.error('Error deleting property:', error);
    }
  };

  const handleCancelDelete = () => {
    setDeleteConfirmId(null);
  };

  const handleSaveEdit = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`/api/properties/edit/${editingProperty.id}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editingProperty)
      });
      const updatedProperty = await response.json();
      setProperties(properties.map(p => p.id === updatedProperty.id ? updatedProperty : p));
      setEditingProperty(null);
    } catch (error) {
      console.error('Error updating property:', error);
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingProperty(prev => ({
      ...prev,
      [name]: name === 'price' ? Number(value) : value
    }));
  };

  return {
    properties,
    editingProperty,
    deleteConfirmId,
    handleEdit,
    handleDelete,
    handleConfirmDelete,
    handleCancelDelete,
    handleSaveEdit,
    handleEditChange,
  };
};

export default usePropertyManager;