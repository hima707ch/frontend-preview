import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx";
import Footer from "./Global/Footer.jsx";
import HomePage from "./v2/HomePage";
import ListingPage from "./v2/ListingPage";
import LoginPage from "./v2/LoginPage";
import RegisterPage from "./v2/RegisterPage";

const Body = () => {
return (
    <Router>
      <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
        <Route path="/listingpage" element={<ListingPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/registerpage" element={<RegisterPage />} />
        </Routes>
      <Footer />
    </Router>
);
};

export default Body;