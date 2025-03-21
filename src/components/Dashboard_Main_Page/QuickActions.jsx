import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <div id="QuickActions_1" className="bg-white rounded-lg shadow p-6">
      <h2 id="QuickActions_2" className="text-xl font-semibold mb-4">Quick Actions</h2>
      <div className="space-y-4">
        <button
          id="QuickActions_3"
          onClick={() => navigate('/add-property')}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Add New Property
        </button>
        <button
          id="QuickActions_4"
          onClick={() => navigate('/properties')}
          className="w-full bg-white text-indigo-600 border border-indigo-600 py-2 px-4 rounded-md hover:bg-indigo-50 transition-colors"
        >
          View All Properties
        </button>
      </div>
    </div>
  );
};

export default QuickActions;