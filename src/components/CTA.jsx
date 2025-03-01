import React, { useEffect, useState } from 'react';

const CTA = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch('/api/listings');
        const data = await response.json();
        setListings(data);
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };

    fetchListings();
  }, []);

  const handleRegisterNow = async () => {
    try {
      const response = await fetch('/api/listings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: 'User registered interest' }),
      });

      if (response.ok) {
        // Handle successful registration
        console.log('Registration successful');
      } else {
        // Handle registration error
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <section
      id="CTA_1"
      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12"
    >
      <div className="container mx-auto text-center">
        <h2 id="CTA_2" className="text-4xl font-bold mb-6">
          Start Your Home Search Today!
        </h2>
        <p id="CTA_3" className="text-xl mb-8">
          Explore the latest listings and find your dream home.
        </p>
        <button
          id="CTA_4"
          className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300"
          onClick={handleRegisterNow}
        >
          Register Now
        </button>
      </div>
    </section>
  );
};

export default CTA;
