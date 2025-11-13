import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/auth/authSlice';

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthed = useSelector((s) => s.auth.isAuthenticated);
  const username = useSelector((s) => s.auth.user?.username);

  const onLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="header">
      <div className="brand">UserMgmt</div>
      <nav className="nav">
        {isAuthed && (
          <>
            <Link to="/dashboard" className={pathname === '/dashboard' ? 'badge' : ''}>Dashboard</Link>
            <Link to="/profile" className={pathname === '/profile' ? 'badge' : ''}>Profile</Link>
            <Link to="/todos" className={pathname === '/todos' ? 'badge' : ''}>Todos</Link>
          </>
        )}
        {!isAuthed ? (
          <Link to="/login" className={pathname === '/login' ? 'badge' : ''}>Login</Link>
        ) : (
          <>
            <span className="badge">Hi, {username}</span>
            <button className="btn danger" onClick={onLogout}>Logout</button>
          </>
        )}
      </nav>
    </div>
  );
}