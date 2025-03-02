import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfileDisplay = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/api/user/profile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setProfile(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load profile');
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div id="UserProfileDisplay_1" className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div id="UserProfileDisplay_2" className="text-center p-4 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div id="UserProfileDisplay_3" className="max-w-3xl mx-auto p-6">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Profile Information</h1>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            onClick={() => window.location.href = '/edit-profile'}
          >
            Edit Profile
          </button>
        </div>

        <div className="space-y-6">
          <div id="UserProfileDisplay_4" className="flex items-center space-x-4">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
              <span className="text-3xl text-white font-bold">
                {profile?.username?.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">{profile?.username}</h2>
              <p className="text-gray-600">{profile?.email}</p>
            </div>
          </div>

          <div id="UserProfileDisplay_5" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
              <p className="text-lg text-gray-800">{profile?.fullName || 'Not provided'}</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-sm font-medium text-gray-500">Phone Number</h3>
              <p className="text-lg text-gray-800">{profile?.phone || 'Not provided'}</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-sm font-medium text-gray-500">Location</h3>
              <p className="text-lg text-gray-800">{profile?.location || 'Not provided'}</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-sm font-medium text-gray-500">Member Since</h3>
              <p className="text-lg text-gray-800">
                {profile?.joinDate ? new Date(profile.joinDate).toLocaleDateString() : 'Not available'}
              </p>
            </div>
          </div>

          <div id="UserProfileDisplay_6" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Bio</h3>
            <p className="text-gray-800 whitespace-pre-wrap">
              {profile?.bio || 'No bio provided'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileDisplay;