import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import logo from '../Images/logo/taskify-logo.png'
import DummyImage from '../Images/logo/dummy_images.jpg';

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
    <> {!isAuthed ? "" :
    <div className="header  flex flex-wrap md:flex-nowrap gap-[15px] p-[15px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.1)] fixed top-0 w-full bg-white">
      <div className="brand mt-[5px]">
        <img src={logo} alt='logo' width={130}></img>
      </div>
      <nav className="nav flex flex flex-wrap md:flex-nowrap gap-[20px] justify-between items-center w-full">

        {isAuthed && (
          <div className='flex gap-[15px]'>
            <Link to="/dashboard" className={`${pathname === '/dashboard' ? 'badge bg-[#F3F4F6FF]' : ''} p-[5px_12px] rounded-[4px]` }>Dashboard</Link>
            <Link to="/profile" className={`${pathname === '/profile' ? 'badge bg-[#F3F4F6FF]' : ''} p-[5px_12px] rounded-[4px]`}>Profile</Link>
            <Link to="/todos" className={`${pathname === '/todos' ? 'badge bg-[#F3F4F6FF]' : ''} p-[5px_12px] rounded-[4px]`}>To-Do List</Link>
          </div>
        )}
        {!isAuthed ? ""
        : (
          <div className='flex gap-[15px] items-center'>
            <img className='w-[42px] h-[42px] rounded-full border border-[#bec7d6]' alt='logo Image' src={DummyImage}></img>
            <span className="badge">Hi, <span className='font-bold text-[17px] capitalize'>{username}</span></span>
            <button className="btn danger bg-red-500 p-[5px_12px] text-white rounded-[4px] cursor-pointer" onClick={onLogout}>Logout</button>
          </div>
        )} 
      </nav>
    </div>}
     </>
  );
}