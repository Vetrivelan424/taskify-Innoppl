import React from 'react';
export default function TodoFilters({ filter, setFilter }) {
  return (
    <div className="filters w-full bg-[#f0f0f0] rounded-[4px] p-[5px]">
      {/* <span className="helper">Filter:</span> */}
      <button className={`btn ${filter === 'all' ? 'bg-[#0083ff] text-white' : ''} w-[33%] rounded-[4px] h-[30px]`} onClick={() => setFilter('all')}>All</button>
      <button className={`btn ${filter === 'completed' ? 'bg-[#0083ff] text-white' : ''} w-[33%] rounded-[4px] h-[30px]`} onClick={() => setFilter('completed')}>Completed</button>
      <button className={`btn ${filter === 'pending' ? 'bg-[#0083ff] text-white' : ''}  w-[33%] rounded-[4px] h-[30px]`} onClick={() => setFilter('pending')}>Pending</button>
    </div>
  );
}