import { useState } from 'react';
import axios from 'axios';

export const useLogin = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');

    try {
      const response = await axios.post('/auth/login', {
        username,
        password
      });

      localStorage.setItem('token', response.data.token);
      window.location.href = '/';
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, error, loading };
};