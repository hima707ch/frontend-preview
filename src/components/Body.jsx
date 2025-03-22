import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx";
import Footer from "./Global/Footer.jsx";
import Registration from "./Registration/Body.jsx";
import Login from "./Login/Body.jsx";

const Body = () => {
return (
    <Router>
      <Header />
        <Routes>
            <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        </Routes>
      <Footer />
    </Router>
);
};

export default Body;