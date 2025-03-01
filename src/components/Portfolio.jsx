import React from 'react';

export const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A web application for managing tasks and projects.',
      image: 'project1.jpg',
      link: 'https://project1.com',
    },
    {
      title: 'Project 2',
      description: 'An e-commerce website with a modern and intuitive design.',
      image: 'project2.jpg',
      link: 'https://project2.com',
    },
    {
      title: 'Project 3',
      description: 'A responsive landing page for a marketing campaign.',
      image: 'project3.jpg',
      link: 'https://project3.com',
    },
  ];

  return (
    <section className="py-20" id="portfolio">
      <div className="container mx-auto px-4" id='24'>
        <h2 className="text-3xl font-bold mb-8" id='25'>Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id='26'>
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden" id={`27-${index}`}>
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" id={`28-${index}`} />
              <div className="p-6" id={`29-${index}`}>
                <h3 className="text-xl font-bold mb-2" id={`30-${index}`}>{project.title}</h3>
                <p className="text-gray-600 mb-4" id={`31-${index}`}>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300" id={`32-${index}`}>View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}