import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const UserProfileCard = () => {
  const [userData, setUserData] = useState({
    name: 'Sarah Johnson',
    role: 'Senior Software Engineer',
    location: 'San Francisco, CA',
    connections: 500,
    projects: 32,
    avatar: images[0],
    skills: ['React', 'Node.js', 'Python', 'AWS', 'Docker']
  });

  return (
    <div id="UserProfileCard_1" className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div id="UserProfileCard_2" className="relative h-32 bg-gradient-to-r from-blue-500 to-purple-600">
        <div id="UserProfileCard_3" className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
          <img
            id="UserProfileCard_4"
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
            src={userData.avatar}
            alt="Profile"
          />
        </div>
      </div>
      
      <div id="UserProfileCard_5" className="pt-16 pb-6 px-6">
        <h2 id="UserProfileCard_6" className="text-2xl font-bold text-center text-gray-800">{userData.name}</h2>
        <p id="UserProfileCard_7" className="text-gray-600 text-center mt-1">{userData.role}</p>
        <p id="UserProfileCard_8" className="text-gray-500 text-sm text-center mt-1">{userData.location}</p>
        
        <div id="UserProfileCard_9" className="flex justify-center mt-6 space-x-8">
          <div id="UserProfileCard_10" className="text-center">
            <p id="UserProfileCard_11" className="text-xl font-bold text-gray-800">{userData.connections}</p>
            <p id="UserProfileCard_12" className="text-sm text-gray-500">Connections</p>
          </div>
          <div id="UserProfileCard_13" className="text-center">
            <p id="UserProfileCard_14" className="text-xl font-bold text-gray-800">{userData.projects}</p>
            <p id="UserProfileCard_15" className="text-sm text-gray-500">Projects</p>
          </div>
        </div>
        
        <div id="UserProfileCard_16" className="mt-6">
          <h3 id="UserProfileCard_17" className="text-sm font-semibold text-gray-600 mb-2">Skills</h3>
          <div id="UserProfileCard_18" className="flex flex-wrap gap-2">
            {userData.skills.map((skill, index) => (
              <span
                key={index}
                id={`UserProfileCard_19_${index}`}
                className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm hover:bg-blue-200 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div id="UserProfileCard_20" className="mt-6 flex justify-center space-x-4">
          <button id="UserProfileCard_21" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
            Connect
          </button>
          <button id="UserProfileCard_22" className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;