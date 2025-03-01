// Here's the enhanced version of the BlogPost component with improved visual design and animations:

import React from 'react';

const BlogPost = ({ post }) => {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <img src={post.image} alt={post.title} className="w-full h-48 object-cover transition duration-300 ease-in-out transform hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-gray-800 transition duration-300 ease-in-out hover:text-blue-600">{post.title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
        <a href={`/blog/${post.slug}`} className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-5 w-5 ml-2 transition duration-300 ease-in-out transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </article>
  );
};

export default BlogPost;