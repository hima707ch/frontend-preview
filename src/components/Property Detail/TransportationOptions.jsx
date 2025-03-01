import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const TransportationOptions = () => {
  const [transportOptions, setTransportOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const fetchTransportOptions = async () => {
      try {
        const response = await fetch('/api/transport-options');
        const data = await response.json();
        setTransportOptions([
          {
            id: 1,
            name: 'Bus Service',
            description: 'Comfortable city-wide bus network with regular schedules',
            price: '$2.50',
            image: images[0]
          },
          {
            id: 2,
            name: 'Metro Rail',
            description: 'Fast and efficient subway system connecting major districts',
            price: '$3.00',
            image: images[1]
          },
          {
            id: 3,
            name: 'Taxi Service',
            description: '24/7 taxi service with professional drivers',
            price: '$15.00',
            image: images[2]
          },
          {
            id: 4,
            name: 'Bike Sharing',
            description: 'Eco-friendly bike rental stations across the city',
            price: '$1.00',
            image: images[3]
          }
        ]);
      } catch (error) {
        console.error('Error fetching transport options:', error);
      }
    };
    fetchTransportOptions();
  }, []);

  const handleBooking = async (option) => {
    setSelectedOption(option);
    try {
      const response = await fetch('/api/book-transport', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(option),
      });
      if (response.ok) {
        alert('Booking successful!');
      }
    } catch (error) {
      console.error('Error booking transport:', error);
    }
  };

  return (
    <div id="TransportationOptions_1" className="container mx-auto px-4 py-8">
      <h2 id="TransportationOptions_2" className="text-3xl font-bold text-center mb-8 text-gray-800">Choose Your Transport</h2>
      <div id="TransportationOptions_3" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {transportOptions.map((option) => (
          <div
            key={option.id}
            id={`TransportationOptions_${option.id + 3}`}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <img
              src={option.image}
              alt={option.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{option.name}</h3>
              <p className="text-gray-600 mb-4">{option.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-green-600">{option.price}</span>
                <button
                  onClick={() => handleBooking(option)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedOption && (
        <div id="TransportationOptions_8" className="mt-8 p-6 bg-gray-100 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Selected Transportation</h3>
          <p className="text-gray-700">
            You have selected {selectedOption.name} for {selectedOption.price}
          </p>
        </div>
      )}
    </div>
  );
};

export default TransportationOptions;