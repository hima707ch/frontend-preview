import { useState, useEffect } from 'react';

const useSearch = () => {
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    location: '',
    propertyType: ''
  });

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const resetFilters = () => {
    setFilters({
      minPrice: '',
      maxPrice: '',
      location: '',
      propertyType: ''
    });
  };

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      setError(null);

      try {
        const queryParams = new URLSearchParams();
        if (filters.minPrice) queryParams.append('minPrice', filters.minPrice);
        if (filters.maxPrice) queryParams.append('maxPrice', filters.maxPrice);
        if (filters.location) queryParams.append('location', filters.location);
        if (filters.propertyType) queryParams.append('propertyType', filters.propertyType);

        const response = await fetch(`/api/properties?${queryParams.toString()}`);
        if (!response.ok) throw new Error('Failed to fetch properties');

        const data = await response.json();
        setProperties(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [filters]);

  return {
    filters,
    properties,
    loading,
    error,
    handleFilterChange,
    resetFilters
  };
};

export default useSearch;