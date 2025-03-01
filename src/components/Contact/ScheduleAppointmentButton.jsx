import React, { useState } from 'react';
import axios from 'axios';

const ScheduleAppointmentButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    service: 'consultation'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/appointments', formData);
      setIsModalOpen(false);
      alert('Appointment scheduled successfully!');
    } catch (error) {
      alert('Error scheduling appointment');
    }
  };

  return (
    <div id="ScheduleAppointmentButton_1" className="relative">
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        id="ScheduleAppointmentButton_2"
      >
        Schedule Appointment
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" id="ScheduleAppointmentButton_3">
          <div className="bg-white rounded-xl p-8 w-96 shadow-2xl" id="ScheduleAppointmentButton_4">
            <h2 className="text-2xl font-bold mb-6 text-gray-800" id="ScheduleAppointmentButton_5">Schedule Your Appointment</h2>
            <form onSubmit={handleSubmit} className="space-y-4" id="ScheduleAppointmentButton_6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  id="ScheduleAppointmentButton_7"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  id="ScheduleAppointmentButton_8"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  id="ScheduleAppointmentButton_9"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Time</label>
                <input
                  type="time"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  id="ScheduleAppointmentButton_10"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Service</label>
                <select
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  id="ScheduleAppointmentButton_11"
                >
                  <option value="consultation">Consultation</option>
                  <option value="checkup">Regular Checkup</option>
                  <option value="treatment">Treatment</option>
                </select>
              </div>
              <div className="flex space-x-4 mt-6">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  id="ScheduleAppointmentButton_12"
                >
                  Confirm
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-300"
                  id="ScheduleAppointmentButton_13"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleAppointmentButton;