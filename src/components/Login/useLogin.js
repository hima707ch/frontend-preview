import { useState } from 'react';

const useLogin = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (credentials) => {
    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('userRole', data.role);
      setSuccess('Login successful! Redirecting...');
      
      // Redirect based on role
      setTimeout(() => {
        window.location.href = data.role === 'seller' ? '/dashboard' : '/';
      }, 1500);

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleLogin, error, success, isLoading };
};

export default useLogin;