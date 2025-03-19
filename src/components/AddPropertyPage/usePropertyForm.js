import { useState } from 'react';

export default function usePropertyForm(onSubmit) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    location: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    if (!formData.price || formData.price <= 0) {
      newErrors.price = 'Valid price is required';
    }
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      await onSubmit(formData);
      setFormData({
        title: '',
        description: '',
        price: '',
        location: ''
      });
    }
  };

  return { formData, handleChange, handleSubmitForm, errors };
}