import React, { useState } from 'react';

const ListingPagination = ({ totalPages = 10, currentPage = 1, onPageChange }) => {
  const [activePage, setActivePage] = useState(currentPage);

  const handlePageChange = (page) => {
    setActivePage(page);
    if (onPageChange) onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          id={`ListingPagination_${i}`}
          onClick={() => handlePageChange(i)}
          className={`h-10 w-10 mx-1 rounded-full flex items-center justify-center transition-all duration-300 ${activePage === i ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-110' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
        >
          {i}
        </button>
      )
    }
    return pages;
  };

  return (
    <div id="ListingPagination_1" className="flex flex-col items-center space-y-4 py-8">
      <div className="flex items-center space-x-2">
        <button
          id="ListingPagination_2"
          onClick={() => handlePageChange(Math.max(1, activePage - 1))}
          disabled={activePage === 1}
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${activePage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:scale-105'}`}
        >
          Previous
        </button>
        <div className="flex items-center overflow-x-auto px-2">
          {renderPageNumbers()}
        </div>
        <button
          id="ListingPagination_3"
          onClick={() => handlePageChange(Math.min(totalPages, activePage + 1))}
          disabled={activePage === totalPages}
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${activePage === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:scale-105'}`}
        >
          Next
        </button>
      </div>
      <p id="ListingPagination_4" className="text-gray-600">
        Page {activePage} of {totalPages}
      </p>
    </div>
  );
};

export default ListingPagination;