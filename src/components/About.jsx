import React, { useState, useEffect } from 'react';

const About = () => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await fetch('/api/listings');
        const data = await response.json();
        setAchievements(data.slice(0, 3));
      } catch (error) {
        console.error('Error fetching achievements:', error);
      }
    };

    fetchAchievements();
  }, []);

  return (
    <section id="About_1" className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 id="About_2" className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Us</h2>
          <p id="About_3" className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Story, Mission, and Vision
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div id="About_4" className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Our Story</h3>
              <p className="mt-2 text-base text-gray-500">
                Founded in 2005, RealEstate Inc. started with a vision to transform the real estate industry. With dedication and innovative solutions, we've grown to become a trusted name in the market.
              </p>
            </div>

            <div id="About_5" className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Our Mission</h3>
              <p className="mt-2 text-base text-gray-500">
                Our mission is to provide exceptional real estate services, prioritizing client satisfaction and building long-lasting relationships. We strive to make the process of buying, selling, or renting properties seamless and efficient.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 id="About_6" className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl text-center mb-6">
            Recent Achievements
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {achievements.map((achievement, index) => (
              <div key={index} id={`About_${7 + index}`} className="group relative bg-white p-6 rounded-lg shadow-md">
                <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {achievement.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{achievement.address}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
