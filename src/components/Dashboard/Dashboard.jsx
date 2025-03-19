import React from 'react';
import UserPanel from './UserPanel';
import PropertyList from './PropertyList';
import AddProperty from './AddProperty';
import { useDashboard } from './useDashboard';

const Dashboard = () => {
  const { userRole, activeTab, handleTabChange } = useDashboard();

  return (
    <div id="Dashboard_1" className="flex min-h-screen bg-gray-100">
      <aside id="Dashboard_2" className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 id="Dashboard_3" className="text-xl font-semibold text-gray-800">Dashboard</h2>
          <nav className="mt-6">
            <button
              id="Dashboard_4"
              onClick={() => handleTabChange('profile')}
              className={`w-full text-left px-4 py-2 rounded ${activeTab === 'profile' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
            >
              Profile
            </button>
            {userRole === 'seller' && (
              <button
                id="Dashboard_5"
                onClick={() => handleTabChange('properties')}
                className={`w-full text-left px-4 py-2 rounded ${activeTab === 'properties' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
              >
                Manage Properties
              </button>
            )}
          </nav>
        </div>
      </aside>
      <main id="Dashboard_6" className="flex-1 p-8">
        {activeTab === 'profile' && <UserPanel />}
        {activeTab === 'properties' && userRole === 'seller' && (
          <div>
            <AddProperty />
            <PropertyList />
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;