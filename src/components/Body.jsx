import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx";
import Footer from "./Global/Footer.jsx";
import pages from "./pages/Body.jsx";

const Body = () => {
    return (
        <Router>
          <Header />
            <Routes>
                <Route path="/pages" element={<pages />} />
            </Routes>
          <Footer />
        </Router>
    );
};

export default Body;