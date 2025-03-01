import React, { useState } from 'react';

const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);

  const calculateMortgage = (e) => {
    e.preventDefault();
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const months = parseFloat(loanTerm) * 12;

    const monthly = (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
    setMonthlyPayment(monthly.toFixed(2));
    setTotalPayment((monthly * months).toFixed(2));
  };

  return (
    <div id="MortgageCalculator_1" className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <h2 id="MortgageCalculator_2" className="text-3xl font-bold text-center text-indigo-600 mb-8">Mortgage Calculator</h2>
          
          <form onSubmit={calculateMortgage} className="space-y-6">
            <div id="MortgageCalculator_3" className="space-y-4">
              <div className="relative">
                <label className="text-gray-700 font-medium block mb-2">Loan Amount ($)</label>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
                  required
                />
              </div>

              <div className="relative">
                <label className="text-gray-700 font-medium block mb-2">Annual Interest Rate (%)</label>
                <input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
                  required
                  step="0.01"
                />
              </div>

              <div className="relative">
                <label className="text-gray-700 font-medium block mb-2">Loan Term (Years)</label>
                <input
                  type="number"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
                  required
                />
              </div>
            </div>

            <button
              id="MortgageCalculator_4"
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-200 transform hover:scale-[1.02] font-medium"
            >
              Calculate
            </button>
          </form>

          {monthlyPayment && (
            <div id="MortgageCalculator_5" className="mt-8 space-y-4 bg-indigo-50 p-6 rounded-xl">
              <div className="flex justify-between items-center border-b border-indigo-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-700">Monthly Payment:</h3>
                <span className="text-2xl font-bold text-indigo-600">${monthlyPayment}</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <h3 className="text-lg font-semibold text-gray-700">Total Payment:</h3>
                <span className="text-2xl font-bold text-indigo-600">${totalPayment}</span>
              </div>
            </div>
          )}
        </div>

        <div id="MortgageCalculator_6" className="mt-8 bg-white rounded-2xl shadow-xl p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Tips for Home Buyers</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center">
              <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Consider a down payment of at least 20% to avoid PMI
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Shop around for the best interest rates
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Factor in additional costs like property taxes and insurance
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;