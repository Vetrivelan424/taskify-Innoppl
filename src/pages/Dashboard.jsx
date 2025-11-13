import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const user = useSelector((s) => s.auth.user);
  const username = user?.username || '—';

  return (
    <div className="card">
      <h2>Welcome, {username}</h2>
      <div className="space" />
      <div className="grid grid-2">
        <div className="card">
          <h3>Your Profile</h3>
          <p className="helper">Update your username/email.</p>
          <Link className="btn" to="/profile">Go to Profile</Link>
        </div>
        <div className="card">
          <h3>Your Todos</h3>
          <p className="helper">Create, edit, complete, and filter your tasks.</p>
          <Link className="btn" to="/todos">Manage Todos</Link>
        </div>
      </div>
    </div>
  );
}