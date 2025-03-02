import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx";
import Footer from "./Global/Footer.jsx";
import HomePage from "./HomePage/Body.jsx";
import PropertiesPage from "./PropertiesPage/Body.jsx";
import ProfilePage from "./ProfilePage/Body.jsx";
import AdminPage from "./AdminPage/Body.jsx";

const Body = () => {
return (
    <Router>
      <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
        <Route path="/propertiespage" element={<PropertiesPage />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/adminpage" element={<AdminPage />} />
        </Routes>
      <Footer />
    </Router>
);
};

export default Body;