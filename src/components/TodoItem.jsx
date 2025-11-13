import React from 'react';
export default function TodoItem({ todo, onToggle, onEdit, onDelete }) {
  return (
    <div className={`todo  shadow-[0_0_4px_#1A1AB3FF] rounded-[7px] p-[15px] lg:w-[33%] md:w-[48%] flex flex-col justify-between`}>
      <div className='flex flex-col'>
        <strong className='text-[18px] font-bold mb-[15px] capitalize mb-1'>{todo.title}</strong>
        {todo.description && <div className="helper text-[14px]">{todo.description}</div>}
        </div>
      <div className="nav flex-col text-[14px] my-4">
         <span className="badge bg-gray-300 w-fit p-[5px_8px] rounded-[15px]">{todo.completed ? 'Done' : 'Pending'}</span>
    <div className='flex gap-[5px] text-[14px] mt-5'>
      <button className="btn w-fit p-[5px_8px] border border-yellow-300 hover:bg-yellow-300 rounded-[7px] cursor-pointer" onClick={() => onToggle(todo.id)}>{todo.completed ? 'Mark Pending' : 'Mark Done'}</button>
        <button className="btn w-fit p-[5px_8px] border border-green-300 hover:bg-green-300 rounded-[7px] cursor-pointer" onClick={() => onEdit(todo.id)}>Edit</button>
        <button className="btn w-fit px-[8px] border border-red-300  hover:bg-red-300 rounded-[7px] cursor-pointer" onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
        </div>
    </div>
  );
}