import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EnergyEfficiencyRating = () => {
  const [rating, setRating] = useState({
    buildingType: '',
    squareFootage: '',
    yearBuilt: '',
    energyConsumption: ''
  });
  const [score, setScore] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/calculate-rating', rating);
      setScore(response.data.score);
      setRecommendations(response.data.recommendations);
    } catch (error) {
      console.error('Error calculating rating:', error);
    }
  };

  const handleChange = (e) => {
    setRating({
      ...rating,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="EnergyEfficiencyRating_1" className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 id="EnergyEfficiencyRating_2" className="text-4xl font-bold text-green-600 mb-4">Energy Efficiency Rating Calculator</h1>
          <p id="EnergyEfficiencyRating_3" className="text-lg text-gray-600">Evaluate your building's energy performance and get personalized recommendations</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg p-8 mb-8">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label id="EnergyEfficiencyRating_4" className="block text-sm font-medium text-gray-700 mb-2">Building Type</label>
              <select
                name="buildingType"
                value={rating.buildingType}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              >
                <option value="">Select building type</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="industrial">Industrial</option>
              </select>
            </div>

            <div>
              <label id="EnergyEfficiencyRating_5" className="block text-sm font-medium text-gray-700 mb-2">Square Footage</label>
              <input
                type="number"
                name="squareFootage"
                value={rating.squareFootage}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
                placeholder="Enter square footage"
              />
            </div>

            <div>
              <label id="EnergyEfficiencyRating_6" className="block text-sm font-medium text-gray-700 mb-2">Year Built</label>
              <input
                type="number"
                name="yearBuilt"
                value={rating.yearBuilt}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
                placeholder="Enter year built"
              />
            </div>

            <div>
              <label id="EnergyEfficiencyRating_7" className="block text-sm font-medium text-gray-700 mb-2">Annual Energy Consumption (kWh)</label>
              <input
                type="number"
                name="energyConsumption"
                value={rating.energyConsumption}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
                placeholder="Enter annual energy consumption"
              />
            </div>

            <button
              type="submit"
              id="EnergyEfficiencyRating_8"
              className="w-full bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              Calculate Rating
            </button>
          </div>
        </form>

        {score && (
          <div id="EnergyEfficiencyRating_9" className="bg-white shadow-xl rounded-lg p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Energy Efficiency Score</h2>
              <div className="text-6xl font-bold text-green-600">{score}/100</div>
              <p className="mt-4 text-gray-600">{score >= 80 ? 'Excellent' : score >= 60 ? 'Good' : 'Needs Improvement'}</p>
            </div>

            {recommendations.length > 0 && (
              <div>
                <h3 id="EnergyEfficiencyRating_10" className="text-xl font-semibold text-gray-800 mb-4">Recommendations</h3>
                <ul className="space-y-3">
                  {recommendations.map((recommendation, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg"
                    >
                      <svg className="h-6 w-6 text-green-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{recommendation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EnergyEfficiencyRating;