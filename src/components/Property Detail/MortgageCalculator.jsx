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

    const monthlyPmt = (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
    const totalPmt = monthlyPmt * months;

    setMonthlyPayment(monthlyPmt.toFixed(2));
    setTotalPayment(totalPmt.toFixed(2));
  };

  return (
    <div id="MortgageCalculator_1" className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden p-8">
        <h2 id="MortgageCalculator_2" className="text-3xl font-bold text-center text-gray-800 mb-8">Mortgage Calculator</h2>
        
        <form onSubmit={calculateMortgage} className="space-y-6">
          <div id="MortgageCalculator_3" className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Loan Amount ($)</label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              required
            />
          </div>

          <div id="MortgageCalculator_4" className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Interest Rate (%)</label>
            <input
              type="number"
              step="0.01"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              required
            />
          </div>

          <div id="MortgageCalculator_5" className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Loan Term (Years)</label>
            <input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              required
            />
          </div>

          <button
            type="submit"
            id="MortgageCalculator_6"
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            Calculate
          </button>
        </form>

        {monthlyPayment && (
          <div id="MortgageCalculator_7" className="mt-8 space-y-4 bg-gray-50 p-6 rounded-lg">
            <div className="flex justify-between items-center border-b pb-4">
              <span className="text-gray-600 font-medium">Monthly Payment:</span>
              <span className="text-2xl font-bold text-indigo-600">${monthlyPayment}</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-gray-600 font-medium">Total Payment:</span>
              <span className="text-2xl font-bold text-indigo-600">${totalPayment}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MortgageCalculator;