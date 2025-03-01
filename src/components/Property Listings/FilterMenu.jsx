import React, { useState } from 'react';

const FilterMenu = () => {
  const [priceRange, setPriceRange] = useState(1000);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const categories = ['Electronics', 'Clothing', 'Books', 'Home & Kitchen', 'Sports'];
  const brands = ['Apple', 'Samsung', 'Nike', 'Adidas', 'Sony', 'LG'];

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const handlePriceChange = (e) => {
    setPriceRange(e.target.value);
  };

  const handleApplyFilters = () => {
    const filters = {
      priceRange,
      categories: selectedCategories,
      brands: selectedBrands
    };
    console.log('Applied filters:', filters);
  };

  return (
    <div id="FilterMenu_1" className="bg-white rounded-lg shadow-lg p-6 w-80">
      <h2 id="FilterMenu_2" className="text-2xl font-bold mb-6 text-gray-800">Filters</h2>
      
      <div id="FilterMenu_3" className="mb-6">
        <h3 className="text-lg font-semibold mb-3 text-gray-700">Price Range</h3>
        <input
          type="range"
          min="0"
          max="2000"
          value={priceRange}
          onChange={handlePriceChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <p className="text-gray-600 mt-2">Up to ${priceRange}</p>
      </div>

      <div id="FilterMenu_4" className="mb-6">
        <h3 className="text-lg font-semibold mb-3 text-gray-700">Categories</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <label key={category} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
              />
              <span className="text-gray-700">{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div id="FilterMenu_5" className="mb-6">
        <h3 className="text-lg font-semibold mb-3 text-gray-700">Brands</h3>
        <div className="space-y-2">
          {brands.map(brand => (
            <label key={brand} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
                className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
              />
              <span className="text-gray-700">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        id="FilterMenu_6"
        onClick={handleApplyFilters}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterMenu;