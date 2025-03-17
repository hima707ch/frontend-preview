import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx";
import Footer from "./Global/Footer.jsx";
import Homepage from "./v2/Homepage";
import Register from "./v2/Register";
import Login from "./v2/Login";
import Dashboard from "./v2/Dashboard";
import AddProperty from "./v2/Add Property";

const Body = () => {
return (
    <Router>
      <Header />
        <Routes>
            <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addproperty" element={<AddProperty />} />
        </Routes>
      <Footer />
    </Router>
);
};

export default Body;