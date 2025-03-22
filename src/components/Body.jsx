import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx";
import Footer from "./Global/Footer.jsx";
import LoginPage from "./LoginPage/Body.jsx";
import RegisterPage from "./RegisterPage/Body.jsx";

const Body = () => {
return (
    <Router>
      <Header />
        <Routes>
            <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/registerpage" element={<RegisterPage />} />
        </Routes>
      <Footer />
    </Router>
);
};

export default Body;