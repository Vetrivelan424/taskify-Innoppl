import React from 'react';
export default function TodoFilters({ filter, setFilter }) {
  return (
    <div className="filters">
      <span className="helper">Filter:</span>
      <button className={`btn ${filter === 'all' ? '' : 'secondary'}`} onClick={() => setFilter('all')}>All</button>
      <button className={`btn ${filter === 'completed' ? '' : 'secondary'}`} onClick={() => setFilter('completed')}>Completed</button>
      <button className={`btn ${filter === 'pending' ? '' : 'secondary'}`} onClick={() => setFilter('pending')}>Pending</button>
    </div>
  );
}