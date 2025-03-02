import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const QuickLinksSection = () => {
  const [userRole, setUserRole] = useState('user');
  const [links, setLinks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user role and permissions from backend
    fetch('/api/user/role')
      .then(res => res.json())
      .then(data => setUserRole(data.role))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    // Define links based on user role
    const roleBasedLinks = {
      admin: [
        { title: 'Admin Dashboard', icon: '🎛️', path: '/admin/dashboard', color: 'bg-purple-600' },
        { title: 'User Management', icon: '👥', path: '/admin/users', color: 'bg-blue-600' },
        { title: 'Property Overview', icon: '🏘️', path: '/admin/properties', color: 'bg-green-600' },
        { title: 'Analytics', icon: '📊', path: '/admin/analytics', color: 'bg-yellow-600' }
      ],
      manager: [
        { title: 'Property Management', icon: '🏢', path: '/manager/properties', color: 'bg-blue-600' },
        { title: 'Tenant Requests', icon: '📝', path: '/manager/requests', color: 'bg-green-600' },
        { title: 'Maintenance', icon: '🔧', path: '/manager/maintenance', color: 'bg-orange-600' }
      ],
      user: [
        { title: 'My Profile', icon: '👤', path: '/profile', color: 'bg-indigo-600' },
        { title: 'My Properties', icon: '🏠', path: '/properties', color: 'bg-green-600' },
        { title: 'Payments', icon: '💳', path: '/payments', color: 'bg-pink-600' },
        { title: 'Support', icon: '❓', path: '/support', color: 'bg-blue-600' }
      ]
    };

    setLinks(roleBasedLinks[userRole] || roleBasedLinks.user);
  }, [userRole]);

  return (
    <div id="QuickLinks_1" className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg">
      <h2 id="QuickLinks_2" className="text-2xl font-bold text-gray-800 mb-6">Quick Access</h2>
      <div id="QuickLinks_3" className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {links.map((link, index) => (
          <button
            key={index}
            id={`QuickLinks_${index + 4}`}
            onClick={() => navigate(link.path)}
            className={`${link.color} hover:opacity-90 transform hover:scale-105 transition-all duration-300 p-4 rounded-lg text-white flex flex-col items-center justify-center gap-2 shadow-md`}
          >
            <span className="text-2xl">{link.icon}</span>
            <span className="text-sm font-medium text-center">{link.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickLinksSection;