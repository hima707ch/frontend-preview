import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const usePropertyListing = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`/api/properties/${id}`);
        if (!response.ok) throw new Error('Property not found');
        const data = await response.json();
        setProperty(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          propertyId: id,
          ...formData
        })
      });

      if (!response.ok) throw new Error('Failed to send message');
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      alert('Message sent successfully!');
    } catch (err) {
      alert('Failed to send message. Please try again.');
    }
  };

  return {
    property,
    loading,
    error,
    formData,
    setFormData,
    handleContactSubmit
  };
};