import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx";
import Footer from "./Global/Footer.jsx";
import HomePage from "./v2/HomePage";
import AddProperty from "./v2/AddProperty";
import LoginRegister from "./v2/LoginRegister";
import PropertyDetails from "./v2/PropertyDetails";

const Body = () => {
return (
    <Router>
      <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
        <Route path="/addproperty" element={<AddProperty />} />
        <Route path="/loginregister" element={<LoginRegister />} />
        <Route path="/propertydetails" element={<PropertyDetails />} />
        </Routes>
      <Footer />
    </Router>
);
};

export default Body;