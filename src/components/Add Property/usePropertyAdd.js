import { useState } from 'react';

const usePropertyAdd = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (propertyData) => {
    setIsLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Authentication required');
      }

      const response = await fetch('/api/properties/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(propertyData)
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to add property');
      }

      const data = await response.json();
      // Handle success (e.g., redirect or show success message)
      alert('Property added successfully!');
      
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSubmit, isLoading, error };
};

export default usePropertyAdd;