import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      tempErrors.phone = 'Phone number is invalid';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await fetch('/api/contact/1', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', phone: '', message: '' });
        } else {
          setSubmitStatus('error');
        }
      } catch (error) {
        setSubmitStatus('error');
      }
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div id="ContactForm_1" className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 id="ContactForm_2" className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>
      
      {submitStatus === 'success' && (
        <div id="ContactForm_3" className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
          Your message has been sent successfully!
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div id="ContactForm_4" className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
          There was an error sending your message. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label id="ContactForm_5" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            id="ContactForm_6"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="John Doe"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label id="ContactForm_7" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            id="ContactForm_8"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="john@example.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label id="ContactForm_9" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input
            id="ContactForm_10"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="(123) 456-7890"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
        </div>

        <div>
          <label id="ContactForm_11" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            id="ContactForm_12"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Your message here..."
          ></textarea>
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
        </div>

        <button
          id="ContactForm_13"
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;