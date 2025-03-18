import { useState } from 'react';
import axios from 'axios';

const useLoginRegister = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [loginForm, setLoginForm] = useState({
    username: '',
    password: ''
  });

  const [registerForm, setRegisterForm] = useState({
    username: '',
    password: ''
  });

  const handleLoginChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value
    });
  };

  const handleRegisterChange = (e) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/login', loginForm);
      localStorage.setItem('token', response.data.token);
      setSuccess('Login successful!');
      setError('');
      // Redirect or update app state here
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
      setSuccess('');
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/auth/register', registerForm);
      setSuccess('Registration successful! Please login.');
      setError('');
      setActiveTab('login');
      setRegisterForm({ username: '', password: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
      setSuccess('');
    }
  };

  return {
    activeTab,
    setActiveTab,
    loginForm,
    registerForm,
    handleLoginSubmit,
    handleRegisterSubmit,
    handleLoginChange,
    handleRegisterChange,
    error,
    success
  };
};

export default useLoginRegister;