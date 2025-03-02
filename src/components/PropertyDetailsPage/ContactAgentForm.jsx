import React, { useState } from 'react';

const ContactAgentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    viewingDate: '',
    viewingTime: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/contact-agent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          viewingDate: '',
          viewingTime: ''
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

  return (
    <div id="ContactAgentForm_1" className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 space-y-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <h2 id="ContactAgentForm_2" className="text-2xl font-semibold text-gray-800 mb-6">Contact Agent</h2>
      
      {isSubmitted ? (
        <div id="ContactAgentForm_3" className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
          Thank you for your message! We'll get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div id="ContactAgentForm_4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div id="ContactAgentForm_5">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div id="ContactAgentForm_6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div id="ContactAgentForm_7">
            <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
              required
            ></textarea>
          </div>
          
          <div id="ContactAgentForm_8" className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Preferred Date</label>
              <input
                type="date"
                name="viewingDate"
                value={formData.viewingDate}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Preferred Time</label>
              <input
                type="time"
                name="viewingTime"
                value={formData.viewingTime}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <span className="animate-pulse">Sending...</span>
            ) : (
              'Schedule Viewing'
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactAgentForm;