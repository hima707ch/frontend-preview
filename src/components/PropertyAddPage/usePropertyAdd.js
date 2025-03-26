import { useState } from 'react';

const usePropertyAdd = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (formData) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Authentication required');
      }

      const formDataObj = new FormData();
      Object.keys(formData).forEach(key => {
        if (key === 'images') {
          formData[key].forEach(image => {
            formDataObj.append('images', image);
          });
        } else if (key === 'features') {
          formDataObj.append('features', JSON.stringify(formData[key]));
        } else {
          formDataObj.append(key, formData[key]);
        }
      });

      const response = await fetch('/api/user/properties/add', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formDataObj
      });

      if (!response.ok) {
        throw new Error('Failed to add property');
      }

      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleSubmit,
    isLoading,
    error,
    success
  };
};

export default usePropertyAdd;