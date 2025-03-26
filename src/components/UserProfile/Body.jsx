import React from 'react';
import ProfileInfo from './ProfileInfo';
import UpdateForm from './UpdateForm';
import useUserProfile from './useUserProfile';

const Body = () => {
  const { userData, loading, error, handleUpdateProfile } = useUserProfile();

  if (loading) return <div id="Body_1" className="flex justify-center items-center min-h-screen">Loading...</div>;
  if (error) return <div id="Body_2" className="text-red-500 text-center p-4">{error}</div>;

  return (
    <div id="Body_3" className="container mx-auto px-4 py-8">
      <h1 id="Body_4" className="text-3xl font-bold text-gray-800 mb-8">User Profile</h1>
      <div id="Body_5" className="grid md:grid-cols-2 gap-8">
        <ProfileInfo userData={userData} />
        <UpdateForm userData={userData} onUpdate={handleUpdateProfile} />
      </div>
    </div>
  );
};

export default Body;