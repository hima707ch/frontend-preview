import { useState, useEffect } from 'react';

export const useUserPanel = () => {
  const [userData, setUserData] = useState({ username: '', role: '' });

  useEffect(() => {
    const username = localStorage.getItem('username');
    const role = localStorage.getItem('role');
    setUserData({ username, role });
  }, []);

  return { userData };
};