import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/DashboardLayout';
import Api from './pages/Api';
import Overview from './pages/Overview';
import Inventory from './pages/Inventory';
import OrdersTracking from './pages/OrderTracking';
import Orders from './pages/Orders';
import Products from './pages/Products';
import Returns from './pages/Returns';
import InvoicePage from './pages/invoice';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Inventory />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<Products />} />
          <Route path="returns" element={<Returns />} />
          <Route path="order-tracking" element={<OrdersTracking />} />
          <Route path="invoice" element={<InvoicePage/>} />
        </Route>

        <Route path="/validate" element={<Api />} />
      </Routes>
    </Router>
  );
}

export default App;
