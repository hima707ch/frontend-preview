import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const LatestNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch('/api/news');
      const data = await response.json();
      setNews(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching news:', error);
      setLoading(false);
      setNews([
        {
          id: 1,
          title: 'Housing Market Trends 2024',
          summary: 'Latest insights into the evolving real estate market and predictions for the coming year.',
          image: images[0],
          date: '2024-01-15',
          category: 'Market Trends'
        },
        {
          id: 2,
          title: 'First-Time Homebuyer Guide',
          summary: 'Essential tips and strategies for navigating your first home purchase successfully.',
          image: images[1],
          date: '2024-01-14',
          category: 'Buying Tips'
        },
        {
          id: 3,
          title: 'Maximizing Property Value',
          summary: 'Expert advice on home improvements that yield the best return on investment.',
          image: images[2],
          date: '2024-01-13',
          category: 'Selling Tips'
        }
      ]);
    }
  };

  return (
    <div id="LatestNews_1" className="container mx-auto px-4 py-8">
      <h2 id="LatestNews_2" className="text-3xl font-bold text-gray-800 mb-8 text-center">Latest Real Estate News</h2>
      
      {loading ? (
        <div id="LatestNews_3" className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div id="LatestNews_4" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <div
              key={item.id}
              id={`LatestNews_5_${item.id}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
                  {item.category}
                </div>
              </div>
              
              <div className="p-6">
                <p id="LatestNews_6" className="text-sm text-gray-500 mb-2">{item.date}</p>
                <h3 id="LatestNews_7" className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-600 transition duration-300">
                  {item.title}
                </h3>
                <p id="LatestNews_8" className="text-gray-600 mb-4">{item.summary}</p>
                <button
                  id="LatestNews_9"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition duration-300 transform hover:-translate-y-1"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div id="LatestNews_10" className="text-center mt-8">
        <button className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200 transition duration-300 font-semibold">
          Load More News
        </button>
      </div>
    </div>
  );
};

export default LatestNews;