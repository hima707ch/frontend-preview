import { useState, useEffect } from 'react';

export const useDashboard = () => {
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Please login to access the dashboard');
      setLoading(false);
      return;
    }

    setUserRole(localStorage.getItem('role'));
    setLoading(false);
  }, []);

  return { userRole, loading, error };
};
