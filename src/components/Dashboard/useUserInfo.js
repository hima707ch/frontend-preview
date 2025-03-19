import { useState, useEffect } from 'react';

export const useUserInfo = () => {
  const [userData, setUserData] = useState({
    username: localStorage.getItem('username') || '',
    joinDate: new Date().toLocaleDateString(),
  });

  return { userData };
};
