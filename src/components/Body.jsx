import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx";
import Footer from "./Global/Footer.jsx";
import HomePage from "./HomePage/Body.jsx";
import SearchPage from "./SearchPage/Body.jsx";
import PropertyAddPage from "./PropertyAddPage/Body.jsx";
import UserProfile from "./UserProfile/Body.jsx";

const Body = () => {
    return (
        <Router>
          <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
        <Route path="/searchpage" element={<SearchPage />} />
        <Route path="/propertyaddpage" element={<PropertyAddPage />} />
        <Route path="/userprofile" element={<UserProfile />} />
            </Routes>
          <Footer />
        </Router>
    );
};

export default Body;