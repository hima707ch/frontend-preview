import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaginationControl = ({ itemsPerPage = 10 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState([]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    fetchProperties();
  }, [currentPage]);

  const fetchProperties = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/properties?offset=${(currentPage - 1) * itemsPerPage}&limit=${itemsPerPage}`);
      setProperties(response.data.properties);
      setTotalItems(response.data.total);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
    setLoading(false);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo(0, 0);
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          id={`PaginationControl_${i}`}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 mx-1 rounded-lg transition-all duration-300 ${currentPage === i
            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105'
            : 'bg-white hover:bg-gray-100 text-gray-700 hover:text-gray-900 border border-gray-300 hover:border-gray-400 shadow-sm hover:shadow'}`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div id="PaginationControl_1" className="flex flex-col items-center space-y-4 my-8">
      <div className="flex items-center justify-center space-x-2">
        <button
          id="PaginationControl_2"
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${currentPage === 1
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:shadow-lg transform hover:-translate-y-0.5'}`}
        >
          First
        </button>
        <button
          id="PaginationControl_3"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${currentPage === 1
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:shadow-lg transform hover:-translate-y-0.5'}`}
        >
          Previous
        </button>
        
        <div className="flex items-center">
          {renderPageNumbers()}
        </div>

        <button
          id="PaginationControl_4"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${currentPage === totalPages
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:shadow-lg transform hover:-translate-y-0.5'}`}
        >
          Next
        </button>
        <button
          id="PaginationControl_5"
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${currentPage === totalPages
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:shadow-lg transform hover:-translate-y-0.5'}`}
        >
          Last
        </button>
      </div>

      <div id="PaginationControl_6" className="text-sm text-gray-600">
        Showing page {currentPage} of {totalPages} ({totalItems} total items)
      </div>

      {loading && (
        <div id="PaginationControl_7" className="flex items-center justify-center space-x-2">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-500"></div>
          <span className="text-gray-600">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default PaginationControl;