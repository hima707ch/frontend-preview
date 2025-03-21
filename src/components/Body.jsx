import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx";
import Footer from "./Global/Footer.jsx";
import DashboardMainPage from "./Dashboard Main Page/Body.jsx";
import ProductsPage from "./Products Page/Body.jsx";
import OrdersPage from "./Orders Page/Body.jsx";

const Body = () => {
return (
    <Router>
      <Header />
        <Routes>
            <Route path="/dashboardmainpage" element={<DashboardMainPage />} />
        <Route path="/productspage" element={<ProductsPage />} />
        <Route path="/orderspage" element={<OrdersPage />} />
        </Routes>
      <Footer />
    </Router>
);
};

export default Body;