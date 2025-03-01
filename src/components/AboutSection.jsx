import React from 'react';
import images from '../assets/images';

export default function AboutSection() {
  return (
    <section className="bg-gray-100 py-16" id="AboutSection_1">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center" id="AboutSection_2">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-6" id="AboutSection_3">
              At Acme Real Estate, we are dedicated to helping our clients find their dream homes and navigate the complex world of real estate. Founded in 2005 by industry veterans John Smith and Jane Doe, our company has grown to become one of the most trusted names in the business.
            </p>
            <p className="text-lg mb-6" id="AboutSection_4">
              Our mission is to provide exceptional service and expertise to every client, whether they are buying, selling, or investing in real estate. We believe in building long-term relationships based on trust, transparency, and integrity.
            </p>
            <p className="text-lg" id="AboutSection_5">
              With a team of experienced agents and a commitment to staying ahead of industry trends, we are well-equipped to handle all of your real estate needs. Let us help you achieve your goals and make your real estate dreams a reality.
            </p>
          </div>
          <div>
            <img src={images[0]} alt="Team Photo" className="w-full h-auto rounded-lg shadow-lg" id="AboutSection_6" />
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4" id="AboutSection_7">Company Timeline</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg shadow-md p-6" id="AboutSection_8">
                  <h4 className="text-xl font-bold mb-2" id="AboutSection_9">2005</h4>
                  <p id="AboutSection_10">Acme Real Estate is founded by John Smith and Jane Doe</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6" id="AboutSection_11">
                  <h4 className="text-xl font-bold mb-2" id="AboutSection_12">2010</h4>
                  <p id="AboutSection_13">Expanded to multiple locations across the state</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6" id="AboutSection_14">
                  <h4 className="text-xl font-bold mb-2" id="AboutSection_15">2015</h4>
                  <p id="AboutSection_16">Recognized as a top real estate company in the region</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6" id="AboutSection_17">
                  <h4 className="text-xl font-bold mb-2" id="AboutSection_18">2020</h4>
                  <p id="AboutSection_19">Launched innovative online platform for virtual home tours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}