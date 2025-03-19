import { useState, useEffect } from 'react';

export const useDashboard = () => {
  const [userRole, setUserRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Not authenticated');
      setIsLoading(false);
      return;
    }

    const role = localStorage.getItem('role');
    setUserRole(role);
    setIsLoading(false);
  }, []);

  return { userRole, isLoading, error };
};
