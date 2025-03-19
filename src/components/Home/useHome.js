import { useState, useEffect } from 'react';

export const useHome = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    location: '',
    minPrice: '',
    maxPrice: ''
  });

  const fetchProperties = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/properties/list', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) throw new Error('Failed to fetch properties');
      
      const data = await response.json();
      setProperties(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const filteredProperties = properties.filter(property => {
    const matchesLocation = !filters.location || 
      property.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchesMinPrice = !filters.minPrice || 
      property.price >= Number(filters.minPrice);
    const matchesMaxPrice = !filters.maxPrice || 
      property.price <= Number(filters.maxPrice);

    return matchesLocation && matchesMinPrice && matchesMaxPrice;
  });

  return {
    properties: filteredProperties,
    loading,
    error,
    filters,
    handleFilterChange
  };
};