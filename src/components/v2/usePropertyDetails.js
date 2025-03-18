import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const usePropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    location: ''
  });

  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');
  const isOwner = property?.userId === userId;

  useEffect(() => {
    fetchPropertyDetails();
  }, [id]);

  const fetchPropertyDetails = async () => {
    try {
      const response = await fetch(`/properties/${id}`);
      if (!response.ok) throw new Error('Failed to fetch property details');
      const data = await response.json();
      setProperty(data);
      setFormData(data);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/properties/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Failed to update property');
      const updatedProperty = await response.json();
      setProperty(updatedProperty);
      setIsEditing(false);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`/properties/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) throw new Error('Failed to delete property');
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return {
    property,
    isLoading,
    error,
    isEditing,
    formData,
    handleInputChange,
    handleEdit,
    handleUpdate,
    handleDelete,
    showDeleteModal,
    setShowDeleteModal,
    isOwner
  };
};
