import React from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Todos from './pages/Todos';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}> 
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/todos" element={<Todos />} />
        </Route>
        <Route path="*" element={<div className="card"><h2>404</h2><p>Not found. Go <Link to="/dashboard">home</Link>.</p></div>} />
      </Routes>
      <footer>Built with React, Hooks & Redux Toolkit</footer>
    </div>
  );
}