import React, { useState, useEffect } from 'react';

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    // Simulated FAQ data - replace with actual API endpoint
    const fetchFAQs = async () => {
      const data = [
        {
          id: 1,
          question: 'How do I create an account?',
          answer: 'To create an account, click on the "Sign Up" button in the top right corner. Fill in your details including email, password, and personal information. Verify your email address through the confirmation link sent to your inbox.'
        },
        {
          id: 2,
          question: 'What payment methods do you accept?',
          answer: 'We accept various payment methods including Visa, Mastercard, American Express, PayPal, and bank transfers. All payments are processed securely through our encrypted payment gateway.'
        },
        {
          id: 3,
          question: 'How can I track my order?',
          answer: 'Once your order is shipped, you will receive a tracking number via email. You can use this number on our website or the couriers website to track your package in real-time.'
        },
        {
          id: 4,
          question: 'What is your return policy?',
          answer: 'We offer a 30-day return policy for all unused items in their original packaging. Simply contact our customer service team to initiate a return. Shipping costs for returns are the responsibility of the customer.'
        },
        {
          id: 5,
          question: 'How can I contact customer support?',
          answer: 'Our customer support team is available 24/7. You can reach us through email at support@example.com, live chat on our website, or call us at 1-800-123-4567.'
        }
      ];
      setFaqs(data);
    };

    fetchFAQs();
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="FAQAccordion_1" className="max-w-3xl mx-auto px-4 py-8">
      <h2 id="FAQAccordion_2" className="text-3xl font-bold text-center mb-8 text-gray-800 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        Frequently Asked Questions
      </h2>
      <div id="FAQAccordion_3" className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <button
              id={`FAQAccordion_${index + 4}`}
              className={`w-full text-left px-6 py-4 flex justify-between items-center ${activeIndex === index ? 'bg-gradient-to-r from-purple-50 to-pink-50' : 'bg-white'}`}
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-semibold text-gray-700 hover:text-gray-900">{faq.question}</span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              id={`FAQAccordion_${index + 9}`}
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-48 py-4' : 'max-h-0'}`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <div id="FAQAccordion_14" className="mt-8 text-center">
        <p className="text-gray-600">Still have questions?</p>
        <button className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default FAQAccordion;