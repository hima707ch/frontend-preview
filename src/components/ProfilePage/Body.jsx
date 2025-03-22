import React from 'react';
import ProfileInfo from './ProfileInfo';
import EditProfileForm from './EditProfileForm';
import { useProfile } from './useProfile';

const Body = () => {
  const { userProfile, isEditing, setIsEditing, handleUpdateProfile, loading, error } = useProfile();

  if (loading) return <div id="Body_1" className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div id="Body_2" className="text-red-500 text-center p-4">{error}</div>;

  return (
    <div id="Body_3" className="container mx-auto px-4 py-8">
      <h1 id="Body_4" className="text-3xl font-bold text-gray-800 mb-8">Profile Page</h1>
      {isEditing ? (
        <EditProfileForm 
          userProfile={userProfile}
          onSubmit={handleUpdateProfile}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <ProfileInfo 
          userProfile={userProfile}
          onEdit={() => setIsEditing(true)}
        />
      )}
    </div>
  );
};

export default Body;