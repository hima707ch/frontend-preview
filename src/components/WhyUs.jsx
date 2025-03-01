import React, { useState, useEffect } from 'react';

const WhyUs = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      const response = await fetch('/api/listings');
      const data = await response.json();
      setListings(data);
    };

    fetchListings();
  }, []);

  const getPropertiesSoldByRegion = (region) => {
    return listings.filter((listing) => listing.region === region).length;
  };

  return (
    <section className="bg-gray-100 py-16" id="WhyUs_1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-12" id="WhyUs_2">
          Why Choose Us
        </h2>
        <div className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-x-8" id="WhyUs_3">
          <div className="flex flex-col items-center text-center" id="WhyUs_4">
            <svg
              className="h-12 w-12 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900" id="WhyUs_5">Trusted Locally</h3>
            <p className="mt-4 text-base text-gray-500" id="WhyUs_6">
              Over 20 years in local real estate. We've sold {getPropertiesSoldByRegion('Downtown')} properties in Downtown alone.
            </p>
          </div>

          <div className="flex flex-col items-center text-center" id="WhyUs_7">
            <svg
              className="h-12 w-12 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900" id="WhyUs_8">Personalized Service</h3>
            <p className="mt-4 text-base text-gray-500" id="WhyUs_9">
              Our dedicated agents provide tailored guidance for each client's unique needs and goals.
            </p>
          </div>

          <div className="flex flex-col items-center text-center" id="WhyUs_10">
            <svg
              className="h-12 w-12 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900" id="WhyUs_11">Local Market Expertise</h3>
            <p className="mt-4 text-base text-gray-500" id="WhyUs_12">
              Deep knowledge of neighborhoods, market trends, and {listings.length} active listings to guide your decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
