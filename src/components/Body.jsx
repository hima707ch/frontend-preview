import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx";
import Footer from "./Global/Footer.jsx";
import HomePage from "./HomePage/Body.jsx";
import RegistrationPage from "./RegistrationPage/Body.jsx";
import LoginPage from "./LoginPage/Body.jsx";
import DashboardPage from "./DashboardPage/Body.jsx";
import AddPropertyPage from "./AddPropertyPage/Body.jsx";
import PropertyListingPage from "./PropertyListingPage/Body.jsx";

const Body = () => {
return (
    <Router>
      <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
        <Route path="/registrationpage" element={<RegistrationPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/dashboardpage" element={<DashboardPage />} />
        <Route path="/addpropertypage" element={<AddPropertyPage />} />
        <Route path="/propertylistingpage" element={<PropertyListingPage />} />
        </Routes>
      <Footer />
    </Router>
);
};

export default Body;