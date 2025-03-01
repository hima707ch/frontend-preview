import React, { useState } from 'react';

const FilterSidebar = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [categories, setCategories] = useState({
    electronics: false,
    clothing: false,
    books: false,
    furniture: false,
    sports: false
  });
  const [ratings, setRatings] = useState(0);

  const handlePriceChange = (e, index) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(e.target.value);
    setPriceRange(newRange);
    onFilterChange({ priceRange: newRange, categories, ratings });
  };

  const handleCategoryChange = (category) => {
    const newCategories = { ...categories, [category]: !categories[category] };
    setCategories(newCategories);
    onFilterChange({ priceRange, categories: newCategories, ratings });
  };

  const handleRatingChange = (value) => {
    setRatings(value);
    onFilterChange({ priceRange, categories, ratings: value });
  };

  return (
    <div id="FilterSidebar_1" className="w-64 bg-white shadow-lg p-6 h-screen fixed left-0 top-0 overflow-y-auto">
      <h2 id="FilterSidebar_2" className="text-2xl font-bold mb-6 text-gray-800">Filters</h2>
      
      <div id="FilterSidebar_3" className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Price Range</h3>
        <div className="space-y-4">
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[0]}
            onChange={(e) => handlePriceChange(e, 0)}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(e, 1)}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      <div id="FilterSidebar_4" className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Categories</h3>
        {Object.keys(categories).map((category) => (
          <div key={category} className="flex items-center mb-3">
            <input
              type="checkbox"
              checked={categories[category]}
              onChange={() => handleCategoryChange(category)}
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
            />
            <label className="ml-2 text-sm font-medium text-gray-700 capitalize">
              {category}
            </label>
          </div>
        ))}
      </div>

      <div id="FilterSidebar_5" className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Ratings</h3>
        <div className="flex flex-col space-y-2">
          {[5, 4, 3, 2, 1].map((star) => (
            <button
              key={star}
              onClick={() => handleRatingChange(star)}
              className={`flex items-center p-2 rounded-lg transition-colors ${
                ratings === star
                  ? 'bg-blue-100 text-blue-600'
                  : 'hover:bg-gray-100'
              }`}
            >
              <div className="flex">
                {[...Array(star)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-sm">{star} & above</span>
            </button>
          ))}
        </div>
      </div>

      <button
        id="FilterSidebar_6"
        onClick={() => {
          setPriceRange([0, 1000]);
          setCategories({
            electronics: false,
            clothing: false,
            books: false,
            furniture: false,
            sports: false
          });
          setRatings(0);
          onFilterChange({ priceRange: [0, 1000], categories: {}, ratings: 0 });
        }}
        className="w-full py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSidebar;