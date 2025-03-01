import React, { useState } from 'react';

const ContactAgentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    propertyId: '123'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact-agent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '', propertyId: '123' });
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-xl" id="ContactAgentForm_1">
      <h2 className="text-2xl font-bold text-gray-800 mb-6" id="ContactAgentForm_2">Contact Property Agent</h2>
      <form onSubmit={handleSubmit} className="space-y-4" id="ContactAgentForm_3">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700" id="ContactAgentForm_4">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            required
            id="ContactAgentForm_5"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700" id="ContactAgentForm_6">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            required
            id="ContactAgentForm_7"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700" id="ContactAgentForm_8">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            required
            id="ContactAgentForm_9"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700" id="ContactAgentForm_10">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            required
            id="ContactAgentForm_11"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-md hover:from-blue-600 hover:to-blue-700 transition duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          id="ContactAgentForm_12"
        >
          Send Message
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-600 text-center" id="ContactAgentForm_13">
        Our agent will get back to you within 24 hours
      </p>
    </div>
  );
};

export default ContactAgentForm;