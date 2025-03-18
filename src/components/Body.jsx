import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx";
import Footer from "./Global/Footer.jsx";
import HomePage from "./v2/HomePage";
import Login from "./v2/Login";
import Register from "./v2/Register";
import AddProperty from "./v2/AddProperty";
import PropertyList from "./v2/PropertyList";
import PropertyDetails from "./v2/PropertyDetails";

const Body = () => {
return (
    <Router>
      <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addproperty" element={<AddProperty />} />
        <Route path="/propertylist" element={<PropertyList />} />
        <Route path="/propertydetails" element={<PropertyDetails />} />
        </Routes>
      <Footer />
    </Router>
);
};

export default Body;