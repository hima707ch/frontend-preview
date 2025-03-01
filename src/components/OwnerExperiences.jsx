import React from 'react';
import images from '../assets/images';

export default function OwnerExperiences() {
  return (
    <div className="py-16" id="OwnerExperiences_1">
      <h2 className="text-4xl font-bold mb-10 text-center animate-fade-in" id="OwnerExperiences_2">My Experiences & Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="OwnerExperiences_3">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1" id="OwnerExperiences_4">
          <img src={images[0]} alt="Experience 1" className="w-full h-64 object-cover animate-pulse" id="OwnerExperiences_5" />
          <div className="p-6" id="OwnerExperiences_6">
            <h3 className="text-xl font-semibold mb-2 animate-fade-in" id="OwnerExperiences_7">Web Development Project</h3>
            <p className="text-gray-600 animate-fade-in" id="OwnerExperiences_8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod, nisi sit amet consectetur iaculis, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1" id="OwnerExperiences_9">
          <img src={images[1]} alt="Experience 2" className="w-full h-64 object-cover animate-pulse" id="OwnerExperiences_10" />
          <div className="p-6" id="OwnerExperiences_11">
            <h3 className="text-xl font-semibold mb-2 animate-fade-in" id="OwnerExperiences_12">Mobile App Development</h3>
            <p className="text-gray-600 animate-fade-in" id="OwnerExperiences_13">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg rounded-lg overflow-hidden col-span-full" id="OwnerExperiences_14">
          <div className="p-8 text-white" id="OwnerExperiences_15">
            <h3 className="text-3xl font-bold mb-4 animate-fade-in" id="OwnerExperiences_16">Full-Stack Development Bootcamp</h3>
            <p className="text-lg animate-fade-in" id="OwnerExperiences_17">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          </div>
        </div>
      </div>
    </div>
  );
}