import React from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Todos from './pages/Todos';
import Navbar from './components/Navbar';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
     <div className="min-h-screen w-full fixed top-0 overflow-scroll h-full"> 
    <Navbar />
     <ToastContainer
        position="top-right"
        autoClose={3000} // auto close in 3s
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    <div className='mt-[92px]'>
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
       </div>
      {/* <footer>Built with React, Hooks & Redux Toolkit</footer> */}
    </div>
  );
}