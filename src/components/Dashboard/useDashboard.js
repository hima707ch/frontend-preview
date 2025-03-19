import { useState, useEffect } from 'react';

export const useDashboard = () => {
  const [userRole, setUserRole] = useState('');
  const [activeTab, setActiveTab] = useState('profile');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if (!token || !role) {
      window.location.href = '/login';
      return;
    }
    setUserRole(role);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return { userRole, activeTab, handleTabChange };
};