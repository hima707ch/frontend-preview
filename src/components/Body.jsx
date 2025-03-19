import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx";
import Footer from "./Global/Footer.jsx";
import Home from "./Home/Body.jsx";
import Login from "./Login/Body.jsx";
import Register from "./Register/Body.jsx";
import Dashboard from "./Dashboard/Body.jsx";
import AddProperty from "./Add Property/Body.jsx";

const Body = () => {
return (
    <Router>
      <Header />
        <Routes>
            <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addproperty" element={<AddProperty />} />
        </Routes>
      <Footer />
    </Router>
);
};

export default Body;