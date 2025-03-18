import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx";
import Footer from "./Global/Footer.jsx";
import HomePage from "./HomePage/Body.jsx";
import Login from "./Login/Body.jsx";
import Register from "./Register/Body.jsx";
import AddProperty from "./AddProperty/Body.jsx";
import PropertyList from "./PropertyList/Body.jsx";
import PropertyDetails from "./PropertyDetails/Body.jsx";

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