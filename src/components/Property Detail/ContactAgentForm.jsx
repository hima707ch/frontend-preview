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
    <div id="ContactAgentForm_1" className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 my-8 transform hover:scale-105 transition-transform duration-300">
      <h2 id="ContactAgentForm_2" className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Agent</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div id="ContactAgentForm_3" className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div id="ContactAgentForm_4" className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div id="ContactAgentForm_5" className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div id="ContactAgentForm_6" className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          ></textarea>
        </div>
        <button
          id="ContactAgentForm_7"
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-md hover:from-blue-600 hover:to-blue-700 transform hover:-translate-y-1 transition-all duration-200 font-semibold"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactAgentForm;