import React, { useState } from 'react';
import { reports } from '../data/dashboardData'; // Adjust path if necessary
import { motion } from 'framer-motion'; // Import Framer Motion

export default function Reports() {
  const [filteredReports, setFilteredReports] = useState(reports);
  const [filterCategory, setFilterCategory] = useState('');

  // Handle filtering by category
  const handleFilterChange = (event) => {
    setFilterCategory(event.target.value);
    if (event.target.value === '') {
      setFilteredReports(reports); // Show all reports if no filter is applied
    } else {
      setFilteredReports(reports.filter(report => report.category === event.target.value));
    }
  };

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Title */}
      <h1 className="text-4xl font-semibold text-gray-900">Reports</h1>

      {/* Filter Section */}
      <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
        <div className="flex items-center space-x-4">
          <label htmlFor="category-filter" className="text-lg font-medium text-gray-700">Filter by Category:</label>
          <select
            id="category-filter"
            className="p-3 border rounded-lg shadow-md text-sm text-gray-700 focus:ring-2 focus:ring-blue-900 focus:outline-none"
            value={filterCategory}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="Sales">Sales</option>
            <option value="Inventory">Inventory</option>
            <option value="Marketing">Marketing</option>
            <option value="Customer Service">Customer Service</option>
          </select>
        </div>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReports.length > 0 ? (
          filteredReports.map((report) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }} // Control the duration of the animation
              className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800">{report.title}</h2>
              <p className="text-sm text-gray-500">{report.category}</p>
              <p className="mt-2 text-sm text-gray-400">{report.date}</p>

              <div
                className={`inline-block px-3 py-1 mt-3 text-xs font-semibold rounded-full ${
                  report.status === 'Completed'
                    ? 'bg-green-500 text-white'
                    : report.status === 'In Progress'
                    ? 'bg-yellow-500 text-white'
                    : 'bg-red-500 text-white'
                }`}
              >
                {report.status}
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 py-4">
            No reports found.
          </div>
        )}
      </div>
    </div>
  );
}
