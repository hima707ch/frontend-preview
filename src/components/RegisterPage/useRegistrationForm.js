import { useState } from 'react';

const useRegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: ''
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
    role: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
      isValid = false;
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    if (!formData.role) {
      newErrors.role = 'Please select a role';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return {
    formData,
    handleChange,
    errors,
    validateForm
  };
};

export default useRegistrationForm;