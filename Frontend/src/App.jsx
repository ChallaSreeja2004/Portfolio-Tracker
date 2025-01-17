import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/HomePage';
import StockDetailsPage from './pages/stockDetails';
import Dashboard from './pages/dashboard';
import NavBar from './components/navbar';
import LoginForm from './components/forms/loginform';
import RegistrationForm from './components/forms/registrationform';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/stocks" element={<StockDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
