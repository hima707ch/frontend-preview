import React from 'react';
import { usePropertyListing } from './usePropertyListing';

const ContactForm = ({ propertyId }) => {
  const { handleContactSubmit, formData, setFormData } = usePropertyListing();

  return (
    <div id="ContactForm_1" className="bg-gray-50 p-6 rounded-lg">
      <h2 id="ContactForm_2" className="text-2xl font-semibold mb-4">Contact Agent</h2>
      <form id="ContactForm_3" onSubmit={handleContactSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full p-2 border rounded h-32"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;