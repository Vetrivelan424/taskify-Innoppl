import React from 'react';
export default function TodoItem({ todo, onToggle, onEdit, onDelete }) {
  return (
    <div className={`todo ${todo.completed ? 'done' : ''}`}>
      <div>
        <strong>{todo.title}</strong>
        {todo.description && <div className="helper">{todo.description}</div>}
      </div>
      <div className="nav">
        <span className="badge">{todo.completed ? 'Done' : 'Pending'}</span>
        <button className="btn secondary" onClick={() => onToggle(todo.id)}>{todo.completed ? 'Mark Pending' : 'Mark Done'}</button>
        <button className="btn" onClick={() => onEdit(todo.id)}>Edit</button>
        <button className="btn danger" onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </div>
  );
}