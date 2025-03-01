import React from 'react';

const Features = () => {
  const features = [
    {
      id: 'Features_1',
      title: 'In-depth Analysis',
      description: 'Dive deep into the world of technology with our comprehensive analysis and insights.',
      icon: 'fas fa-chart-line'
    },
    {
      id: 'Features_2',
      title: 'Expert Opinions',
      description: 'Get valuable perspectives from industry experts and thought leaders.',
      icon: 'fas fa-user-tie'
    },
    {
      id: 'Features_3',
      title: 'Exclusive Interviews',
      description: 'Gain access to exclusive interviews with influential figures in the tech industry.',
      icon: 'fas fa-microphone-alt'
    },
    {
      id: 'Features_4',
      title: 'Cutting-edge Topics',
      description: 'Stay ahead of the curve with our coverage of the latest trends and innovations.',
      icon: 'fas fa-rocket'
    }
  ];

  return (
    <section id="Features_5" className="bg-gradient-to-r from-blue-500 to-purple-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            What We Offer
          </h2>
          <p className="mt-4 text-lg text-white">
            Discover the wealth of knowledge and insights our blog provides.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.id} className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8 hover:shadow-xl transition duration-300">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                      <i className={`${feature.icon} text-white text-xl`}></i>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
