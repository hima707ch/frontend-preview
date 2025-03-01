import React from 'react';

const SocialMediaLinks = () => {
  const socialLinks = [
    { id: 'SocialMediaLinks_1', name: 'Facebook', icon: 'fab fa-facebook', link: 'https://facebook.com', color: 'bg-blue-600' },
    { id: 'SocialMediaLinks_2', name: 'Twitter', icon: 'fab fa-twitter', link: 'https://twitter.com', color: 'bg-sky-400' },
    { id: 'SocialMediaLinks_3', name: 'Instagram', icon: 'fab fa-instagram', link: 'https://instagram.com', color: 'bg-pink-600' },
    { id: 'SocialMediaLinks_4', name: 'LinkedIn', icon: 'fab fa-linkedin', link: 'https://linkedin.com', color: 'bg-blue-700' },
    { id: 'SocialMediaLinks_5', name: 'YouTube', icon: 'fab fa-youtube', link: 'https://youtube.com', color: 'bg-red-600' },
  ];

  return (
    <div id="SocialMediaLinks_6" className="flex flex-col items-center justify-center min-h-[300px] bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <h2 id="SocialMediaLinks_7" className="text-3xl font-bold text-white mb-8">Connect With Us</h2>
      <div id="SocialMediaLinks_8" className="flex flex-wrap justify-center gap-4">
        {socialLinks.map((social) => (
          <a
            key={social.id}
            id={social.id}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${social.color} hover:scale-110 transform transition-all duration-300 rounded-lg p-4 flex items-center gap-3 text-white min-w-[160px] shadow-lg hover:shadow-xl`}
          >
            <i className={`${social.icon} text-2xl`}></i>
            <span className="font-medium">{social.name}</span>
          </a>
        ))}
      </div>
      <div id="SocialMediaLinks_9" className="mt-8 text-gray-400 text-center">
        <p id="SocialMediaLinks_10" className="text-sm">Follow us on social media for the latest updates</p>
        <p id="SocialMediaLinks_11" className="text-xs mt-2">© 2023 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default SocialMediaLinks;