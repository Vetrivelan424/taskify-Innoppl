import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../hooks/useForm';
import TextField from '../components/TextField';
import Button from '../components/Button';
import TodoItem from '../components/TodoItem';
import TodoFilters from '../components/TodoFilters';
import { addTodo, toggleTodo, updateTodo, deleteTodo, setFilter, selectVisible, selectFilter } from '../features/todos/todosSlice';

export default function Todos() {
  const dispatch = useDispatch();
  const username = useSelector((s) => s.auth.user?.username);
  const filter = useSelector(selectFilter);
  const todos = useSelector((s) => selectVisible(s, username));

  const { values, errors, onChange, validate, setValues } = useForm({ title: '', description: '' });

  const onCreate = (e) => {
    e.preventDefault();
    const ok = validate({ title: { required: true } });
    if (!ok) return;
    dispatch(addTodo({ user: username, title: values.title.trim(), description: values.description.trim() }));
    setValues({ title: '', description: '' });
  };

  const onEdit = (id) => {
    const current = todos.find((t) => t.id === id);
    const nextTitle = prompt('Edit title', current?.title || '');
    if (nextTitle == null) return;
    const nextDesc = prompt('Edit description', current?.description || '');
    dispatch(updateTodo({ id, title: nextTitle, description: nextDesc }));
  };

  return (
    <div className="grid" style={{ gap: 16 }}>
      <div className="card" style={{ maxWidth: 720, margin: '0 auto' }}>
        <h2>Todos</h2>
        <form onSubmit={onCreate} className="grid" style={{ gap: 12 }}>
          <TextField label="Title" name="title" value={values.title} onChange={onChange} error={errors.title} placeholder="e.g., Call the client" />
          <TextField label="Description" name="description" value={values.description} onChange={onChange} placeholder="Optional" />
          <Button type="submit">Add</Button>
        </form>
      </div>

      <div className="card">
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <div className="nav">
            <span className="badge">{todos.length} items</span>
          </div>
          <TodoFilters filter={filter} setFilter={(f) => dispatch(setFilter(f))} />
        </div>
        <div className="space" />
        <div className="list">
          {todos.map((t) => (
            <TodoItem key={t.id} todo={t} onToggle={(id) => dispatch(toggleTodo(id))} onEdit={onEdit} onDelete={(id) => dispatch(deleteTodo(id))} />
          ))}
          {todos.length === 0 && <div className="helper">No tasks to show.</div>}
        </div>
      </div>
    </div>
  );
}