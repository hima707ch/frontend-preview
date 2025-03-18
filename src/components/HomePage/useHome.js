import { useState, useEffect } from 'react';

const useHome = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchCriteria, setSearchCriteria] = useState({
    type: '',
    location: '',
    minPrice: '',
    maxPrice: ''
  });

  const fetchProperties = async (criteria) => {
    try {
      setLoading(true);
      setError(null);

      const queryParams = new URLSearchParams(criteria).toString();
      const response = await fetch(`/api/properties/list?${queryParams}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch properties');
      }

      const data = await response.json();
      setProperties(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (formData) => {
    const newCriteria = {
      type: formData.get('type'),
      location: formData.get('location'),
      minPrice: formData.get('minPrice'),
      maxPrice: formData.get('maxPrice')
    };
    setSearchCriteria(newCriteria);
    fetchProperties(newCriteria);
  };

  useEffect(() => {
    fetchProperties(searchCriteria);
  }, []);

  return {
    properties,
    loading,
    error,
    searchCriteria,
    handleSearch
  };
};

export default useHome;