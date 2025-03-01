import React from 'react';
import images from '../assets/images';

const Blog = () => {
  return (
    <section className="bg-gray-100 py-16" id="Blog_1">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center" id="Blog_2">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="Blog_3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden" id="Blog_4">
            <img src={images[0]} alt="Blog Post 1" className="w-full h-48 object-cover" id="Blog_5" />
            <div className="p-6" id="Blog_6">
              <h3 className="text-xl font-semibold mb-2" id="Blog_7">10 Tips for First-Time Home Buyers</h3>
              <p className="text-gray-600" id="Blog_8">Buying your first home can be overwhelming. Here are some essential tips to help you navigate the process smoothly.</p>
              <a href="#" className="text-blue-500 hover:underline mt-4 inline-block" id="Blog_9">Read More</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden" id="Blog_10">
            <img src={images[1]} alt="Blog Post 2" className="w-full h-48 object-cover" id="Blog_11" />
            <div className="p-6" id="Blog_12">
              <h3 className="text-xl font-semibold mb-2" id="Blog_13">The Benefits of Investing in Real Estate</h3>
              <p className="text-gray-600" id="Blog_14">Real estate investment can provide steady cash flow and long-term appreciation. Discover the advantages of investing in properties.</p>
              <a href="#" className="text-blue-500 hover:underline mt-4 inline-block" id="Blog_15">Read More</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden" id="Blog_16">
            <img src={images[2]} alt="Blog Post 3" className="w-full h-48 object-cover" id="Blog_17" />
            <div className="p-6" id="Blog_18">
              <h3 className="text-xl font-semibold mb-2" id="Blog_19">How to Prepare Your Home for Sale</h3>
              <p className="text-gray-600" id="Blog_20">Selling your home? Learn effective strategies to stage your property, attract buyers, and get the best price for your home.</p>
              <a href="#" className="text-blue-500 hover:underline mt-4 inline-block" id="Blog_21">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
