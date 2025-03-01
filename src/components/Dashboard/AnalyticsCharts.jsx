import React, { useState, useEffect } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement, ArcElement);

const AnalyticsCharts = () => {
  const [salesData, setSalesData] = useState([]);
  const [userStats, setUserStats] = useState([]);
  const [revenueData, setRevenueData] = useState([]);

  useEffect(() => {
    // Fetch data from backend
    const fetchData = async () => {
      try {
        const salesResponse = await fetch('/api/sales');
        const userResponse = await fetch('/api/users/stats');
        const revenueResponse = await fetch('/api/revenue');

        const sales = await salesResponse.json();
        const users = await userResponse.json();
        const revenue = await revenueResponse.json();

        setSalesData(sales);
        setUserStats(users);
        setRevenueData(revenue);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const barChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Daily Users',
        data: [12, 19, 3, 5, 2, 3, 9],
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
      },
    ],
  };

  const pieChartData = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    datasets: [
      {
        data: [30, 25, 20, 25],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
        ],
      },
    ],
  };

  return (
    <div id="AnalyticsCharts_1" className="p-6 bg-gray-50 min-h-screen">
      <h1 id="AnalyticsCharts_2" className="text-3xl font-bold text-gray-800 mb-8 text-center">Analytics Dashboard</h1>
      
      <div id="AnalyticsCharts_3" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div id="AnalyticsCharts_4" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Sales Trend</h2>
          <Line data={lineChartData} options={{ responsive: true }} />
        </div>

        <div id="AnalyticsCharts_5" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">User Activity</h2>
          <Bar data={barChartData} options={{ responsive: true }} />
        </div>

        <div id="AnalyticsCharts_6" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Product Distribution</h2>
          <Pie data={pieChartData} options={{ responsive: true }} />
        </div>
      </div>

      <div id="AnalyticsCharts_7" className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div id="AnalyticsCharts_8" className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6 rounded-xl text-white">
          <h3 className="text-lg font-semibold mb-2">Total Revenue</h3>
          <p className="text-3xl font-bold">$124,592</p>
          <p className="text-sm opacity-80 mt-2">+12.5% from last month</p>
        </div>

        <div id="AnalyticsCharts_9" className="bg-gradient-to-r from-pink-500 to-rose-500 p-6 rounded-xl text-white">
          <h3 className="text-lg font-semibold mb-2">Active Users</h3>
          <p className="text-3xl font-bold">8,549</p>
          <p className="text-sm opacity-80 mt-2">+5.2% from last week</p>
        </div>

        <div id="AnalyticsCharts_10" className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6 rounded-xl text-white">
          <h3 className="text-lg font-semibold mb-2">Conversion Rate</h3>
          <p className="text-3xl font-bold">3.2%</p>
          <p className="text-sm opacity-80 mt-2">+0.8% from last month</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCharts;