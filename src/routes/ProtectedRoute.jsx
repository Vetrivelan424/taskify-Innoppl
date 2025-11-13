import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedRoute() {
  const isAuthed = useSelector((s) => s.auth.isAuthenticated);
  return isAuthed ? <Outlet /> : <Navigate to="/login" replace />;
}