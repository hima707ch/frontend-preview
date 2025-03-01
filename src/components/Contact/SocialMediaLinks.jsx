import React from 'react';

const SocialMediaLinks = () => {
  const socialLinks = [
    { id: 'SocialMediaLinks_1', name: 'Facebook', icon: 'fab fa-facebook', url: 'https://facebook.com', color: 'bg-blue-600' },
    { id: 'SocialMediaLinks_2', name: 'Twitter', icon: 'fab fa-twitter', url: 'https://twitter.com', color: 'bg-sky-400' },
    { id: 'SocialMediaLinks_3', name: 'Instagram', icon: 'fab fa-instagram', url: 'https://instagram.com', color: 'bg-pink-600' },
    { id: 'SocialMediaLinks_4', name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://linkedin.com', color: 'bg-blue-700' },
    { id: 'SocialMediaLinks_5', name: 'YouTube', icon: 'fab fa-youtube', url: 'https://youtube.com', color: 'bg-red-600' },
  ];

  return (
    <div id="SocialMediaLinks_6" className="flex flex-col items-center justify-center min-h-[200px] bg-gradient-to-r from-gray-900 to-gray-800 p-8">
      <h2 id="SocialMediaLinks_7" className="text-3xl font-bold text-white mb-8">Connect With Us</h2>
      <div id="SocialMediaLinks_8" className="flex flex-wrap justify-center gap-4">
        {socialLinks.map((social) => (
          <a
            key={social.id}
            id={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${social.color} hover:scale-110 transform transition-all duration-300 rounded-full p-4 flex items-center justify-center group w-14 h-14 shadow-lg hover:shadow-xl`}
          >
            <i className={`${social.icon} text-white text-2xl group-hover:animate-bounce`}></i>
            <span className="sr-only">{social.name}</span>
          </a>
        ))}
      </div>
      <p id="SocialMediaLinks_9" className="text-gray-400 mt-6 text-center text-sm">
        Stay connected with us on social media for the latest updates and news
      </p>
    </div>
  );
};

export default SocialMediaLinks;