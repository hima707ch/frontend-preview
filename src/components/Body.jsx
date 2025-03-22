import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx";
import Footer from "./Global/Footer.jsx";
import HomePage from "./HomePage/Body.jsx";
import LoginPage from "./LoginPage/Body.jsx";
import RegistrationPage from "./RegistrationPage/Body.jsx";
import PropertiesPage from "./PropertiesPage/Body.jsx";
import Dashboard from "./Dashboard/Body.jsx";

const Body = () => {
return (
    <Router>
      <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/registrationpage" element={<RegistrationPage />} />
        <Route path="/propertiespage" element={<PropertiesPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      <Footer />
    </Router>
);
};

export default Body;