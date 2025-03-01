import React from 'react';
import images from '../assets/images';

const BlogPosts = () => {
  const fetchPost = async (id) => {
    try {
      const response = await fetch(`/posts/${id}`);
      const post = await response.json();
      console.log(post); // Handle the fetched post data
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-16" id="BlogPosts_1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-8" id="BlogPosts_2">
          Featured Blog Posts
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" id="BlogPosts_3">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="bg-white overflow-hidden shadow rounded-lg hover:shadow-xl transition duration-300 ease-in-out cursor-pointer"
              onClick={() => fetchPost(index)}
              id={`BlogPosts_4_${index}`}
            >
              <div className="relative pb-48 overflow-hidden" id={`BlogPosts_5_${index}`}>
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src={images[index % images.length]}
                  alt="Blog Post"
                  id={`BlogPosts_6_${index}`}
                />
              </div>
              <div className="p-4" id={`BlogPosts_7_${index}`}>
                <h3 className="text-lg font-medium text-gray-900 mb-2" id={`BlogPosts_8_${index}`}>
                  Blog Post Title {index}
                </h3>
                <p className="text-base text-gray-500 mb-4" id={`BlogPosts_9_${index}`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla sit amet aliquam
                  lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.
                </p>
                <button
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  id={`BlogPosts_10_${index}`}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
