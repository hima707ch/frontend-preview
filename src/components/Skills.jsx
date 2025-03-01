import React from 'react';

export const Skills = () => {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'Git',
  ];

  return (
    <section className="py-20 bg-gray-100" id="skills">
      <div className="container mx-auto px-4" id='33'>
        <h2 className="text-3xl font-bold mb-8" id='34'>Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8" id='35'>
          {skills.map((skill, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center" id={`36-${index}`}>
              <span className="text-xl font-bold text-gray-800" id={`37-${index}`}>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}