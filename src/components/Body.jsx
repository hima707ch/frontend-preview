import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx";
import Footer from "./Global/Footer.jsx";
import HomePage from "./HomePage/Body.jsx";
import RegisterPage from "./RegisterPage/Body.jsx";
import LoginPage from "./LoginPage/Body.jsx";
import SellerDashboard from "./SellerDashboard/Body.jsx";
import AddPropertyPage from "./AddPropertyPage/Body.jsx";
import PropertyDetailsPage from "./PropertyDetailsPage/Body.jsx";
import ProfilePage from "./ProfilePage/Body.jsx";

const Body = () => {
return (
    <Router>
      <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
        <Route path="/registerpage" element={<RegisterPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/sellerdashboard" element={<SellerDashboard />} />
        <Route path="/addpropertypage" element={<AddPropertyPage />} />
        <Route path="/propertydetailspage" element={<PropertyDetailsPage />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        </Routes>
      <Footer />
    </Router>
);
};

export default Body;