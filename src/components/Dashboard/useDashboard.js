import { useState, useEffect } from 'react';

export const useDashboard = () => {
  const [userRole, setUserRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if (!token || !role) {
      setError('Please login to access the dashboard');
      setIsLoading(false);
      return;
    }

    setUserRole(role);
    setIsLoading(false);
  }, []);

  return { userRole, isLoading, error };
}