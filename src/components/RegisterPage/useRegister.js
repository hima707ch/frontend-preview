import { useState } from 'react';

const useRegister = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (data) => {
    try {
      const response = await fetch('/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Registration failed');
      }

      setSuccess(result.message);
      setError('');
    } catch (err) {
      setError(err.message);
      setSuccess('');
    }
  };

  return { handleSubmit, error, success };
};

export default useRegister;