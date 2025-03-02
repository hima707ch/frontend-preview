import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PriceDetails = () => {
  const [priceData, setPriceData] = useState({
    totalPrice: 549000,
    pricePerSqFt: 275,
    monthlyPayment: 2850,
    maintenanceFee: 450,
    propertyTax: 6000,
    hoaFee: 350
  });

  const [showFinanceModal, setShowFinanceModal] = useState(false);

  const handleFinanceQuery = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/finance-queries', {
        email: e.target.email.value,
        phone: e.target.phone.value,
        message: e.target.message.value
      });
      setShowFinanceModal(false);
    } catch (error) {
      console.error('Error submitting query:', error);
    }
  };

  return (
    <div id="PriceDetails_1" className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="mb-8">
        <h2 id="PriceDetails_2" className="text-3xl font-bold text-gray-800 mb-4">Price Details</h2>
        <div id="PriceDetails_3" className="text-5xl font-bold text-blue-600 mb-2">
          ${priceData.totalPrice.toLocaleString()}
        </div>
      </div>

      <div id="PriceDetails_4" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
          <p className="text-gray-600">Price per sq ft</p>
          <p className="text-2xl font-semibold text-gray-800">${priceData.pricePerSqFt}/sq ft</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
          <p className="text-gray-600">Est. Monthly Payment</p>
          <p className="text-2xl font-semibold text-gray-800">${priceData.monthlyPayment}/mo</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
          <p className="text-gray-600">Maintenance Fee</p>
          <p className="text-2xl font-semibold text-gray-800">${priceData.maintenanceFee}/mo</p>
        </div>
      </div>

      <div id="PriceDetails_5" className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl mb-8">
        <h3 className="text-xl font-semibold mb-4">Additional Costs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Annual Property Tax</span>
            <span className="font-semibold">${priceData.propertyTax}/year</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">HOA Fee</span>
            <span className="font-semibold">${priceData.hoaFee}/month</span>
          </div>
        </div>
      </div>

      <div id="PriceDetails_6" className="text-center">
        <button
          onClick={() => setShowFinanceModal(true)}
          className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-md"
        >
          Ask About Financing Options
        </button>
      </div>

      {showFinanceModal && (
        <div id="PriceDetails_7" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Financing Query</h3>
            <form onSubmit={handleFinanceQuery} className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-2 border rounded-lg"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                className="w-full p-2 border rounded-lg"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full p-2 border rounded-lg"
                rows="4"
                required
              ></textarea>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setShowFinanceModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceDetails;