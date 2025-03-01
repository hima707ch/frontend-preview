import React from 'react';
import { motion } from 'framer-motion';
import images from '../assets/images';

const features = [
  {
    id: 'FeatureListComponent_1',
    title: 'Advanced Analytics',
    description: 'Get detailed insights with our powerful analytics tools',
    icon: images[0],
  },
  {
    id: 'FeatureListComponent_2',
    title: 'Secure Platform',
    description: 'Enterprise-grade security for your peace of mind',
    icon: images[1],
  },
  {
    id: 'FeatureListComponent_3',
    title: 'Real-time Collaboration',
    description: 'Work together seamlessly with your team',
    icon: images[2],
  },
  {
    id: 'FeatureListComponent_4',
    title: 'Cloud Integration',
    description: 'Seamlessly connect with your favorite cloud services',
    icon: images[3],
  }
];

const FeatureCard = ({ title, description, icon, id }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center space-y-4"
      id={id}
    >
      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
        <img src={icon} alt={title} className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
      <button className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:opacity-90 transition-opacity duration-300">
        Learn More
      </button>
    </motion.div>
  );
};

const FeatureListComponent = () => {
  return (
    <div id="FeatureListComponent_5" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Powerful Features for Your Success
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover the tools that will transform your workflow
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureListComponent;