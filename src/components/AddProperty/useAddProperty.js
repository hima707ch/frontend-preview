import { useState } from 'react';

export const useAddProperty = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.target);
    const propertyData = {
      title: formData.get('title'),
      description: formData.get('description'),
      price: Number(formData.get('price')),
      location: formData.get('location')
    };

    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Please login to add property');

      const response = await fetch('/properties', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(propertyData)
      });

      if (!response.ok) {
        throw new Error('Failed to add property');
      }

      const result = await response.json();
      e.target.reset();
      alert('Property added successfully!');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSubmit, isLoading, error };
};
