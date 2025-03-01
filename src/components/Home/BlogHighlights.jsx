import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const BlogHighlights = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('api/blogs/highlights');
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        // Fallback data
        setBlogs([
          {
            id: 1,
            title: 'The Future of AI in Healthcare',
            excerpt: 'Exploring how artificial intelligence is revolutionizing medical diagnosis and treatment...',
            author: 'Dr. Sarah Johnson',
            readTime: '5 min',
            image: images[0]
          },
          {
            id: 2,
            title: 'Sustainable Living in 2024',
            excerpt: 'Practical tips and innovations for reducing your carbon footprint...',
            author: 'Mike Chen',
            readTime: '4 min',
            image: images[1]
          },
          {
            id: 3,
            title: 'Digital Privacy in Modern Age',
            excerpt: 'Understanding the importance of data protection in our interconnected world...',
            author: 'Emma Wilson',
            readTime: '6 min',
            image: images[2]
          }
        ]);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div id="BlogHighlights_1" className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div id="BlogHighlights_2" className="max-w-7xl mx-auto">
        <h2 id="BlogHighlights_3" className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Blog Posts</h2>
        <div id="BlogHighlights_4" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              id={`BlogHighlights_${blog.id + 4}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
                  {blog.readTime} read
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{blog.author}</span>
                  <button className="text-blue-500 hover:text-blue-700 font-medium text-sm transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogHighlights;