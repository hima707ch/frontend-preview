import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    feedback: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/feedback', formData);
      alert('Feedback submitted successfully!');
      setFormData({ name: '', email: '', rating: 5, feedback: '' });
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Failed to submit feedback');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div id="FeedbackForm_1" className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <h2 id="FeedbackForm_2" className="text-3xl font-bold text-center mb-8 text-gray-800">Share Your Feedback</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label id="FeedbackForm_3" htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                id="FeedbackForm_4"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
              />
            </div>

            <div>
              <label id="FeedbackForm_5" htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="FeedbackForm_6"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
              />
            </div>

            <div>
              <label id="FeedbackForm_7" htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
              <select
                id="FeedbackForm_8"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>{num} Star{num !== 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>

            <div>
              <label id="FeedbackForm_9" htmlFor="feedback" className="block text-sm font-medium text-gray-700">Your Feedback</label>
              <textarea
                id="FeedbackForm_10"
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
              />
            </div>

            <button
              id="FeedbackForm_11"
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150 ease-in-out"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;