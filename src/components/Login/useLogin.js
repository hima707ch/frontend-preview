import { useState } from 'react';

const useLogin = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (credentials) => {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.role);
      
      window.location.href = '/dashboard';
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleLogin,
    error,
    isLoading
  };
};

export default useLogin;