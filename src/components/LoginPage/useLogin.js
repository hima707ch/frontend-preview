import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.userId);
      localStorage.setItem('role', data.role);

      // Redirect based on role
      if (data.role === 'admin') {
        navigate('/admin-dashboard');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return { handleLogin, error };
};