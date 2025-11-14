import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../hooks/useForm';
import TextField from '../components/TextField';
import Button from '../components/Button';
import TodoItem from '../components/TodoItem';
import TodoFilters from '../components/TodoFilters';
import { toast } from "react-toastify";

import {
  addTodo,
  toggleTodo,
  updateTodo,
  deleteTodo,
  setFilter,
  selectVisible,
  selectFilter
} from '../features/todos/todosSlice';

export default function Todos() {
  const dispatch = useDispatch();
  const username = useSelector((s) => s.auth.user?.username);
  const filter = useSelector(selectFilter);
  const todos = useSelector((s) => selectVisible(s, username));

  // Form state using custom hook
  const { values, errors, onChange, validate, setValues } = useForm({
    title: '',
    description: ''
  });

  // Track editing mode
  const [editingId, setEditingId] = useState(null);

  const onCreateOrUpdate = (e) => {
    e.preventDefault();
    const ok = validate({ title: { required: true } });
    if (!ok) return;

    if (editingId) {
      // Update existing todo
      dispatch(
        updateTodo({
          id: editingId,
          title: values.title.trim(),
          description: values.description.trim()
        })
      );
      setEditingId(null);
      toast.success("Task Updated Successfully! 🎉");
    } else {
      // Create new todo
      dispatch(
        addTodo({
          user: username,
          title: values.title.trim(),
          description: values.description.trim()
        })
      );
      toast.success("Task Created Successfully! 🎉");
    }

    // Reset form fields
    setValues({ title: '', description: '' });
  };

  const onEdit = (todo) => {
    // Fill inputs with the selected todo’s data
    setValues({
      title: todo.title,
      description: todo.description
    });
    setEditingId(todo.id);
  };

  const onCancelEdit = () => {
    setEditingId(null);
    setValues({ title: '', description: '' });
  };

  return (
    <div className="card p-[25px] md:w-[80%] sm:w-[95%] lg:w-[70%] m-auto flex  flex-col  justify-center mb-[22px]">
      {/* Header & Add/Edit Task Section */}
      <div className="card mb-[40px]">
        <div className="mb-[30px]">
          <h2 className="text-[#171A1FFF] text-[30px] font-bold mb-[15px]">
            Your To-Do List
          </h2>
          <p>Stay organized and manage your tasks efficiently.</p>
        </div>

        <form
          onSubmit={onCreateOrUpdate}
          className="grid text-[14px] p-[24px] rounded-[7px] shadow-[0_0_1px_#171a1fDD,0_0_2px_#171a1f14]"
          style={{ gap: 12 }}
        >
          <h3 className="text-[20px] font-bold mb-2">
            {editingId ? 'Edit Task' : 'Add New Task'}
          </h3>

          <TextField
            label="Title"
            name="title"
            value={values.title}
            onChange={onChange}
            error={errors.title}
            placeholder="e.g., Call the client"
          />
          <TextField
            label="Task Description"
            name="description"
            value={values.description}
            onChange={onChange}
            placeholder="Optional"
          />

          <div className="flex w-full justify-end gap-2">
            <Button type="submit" className="w-[100px]">
              {editingId ? 'Update' : 'Add Task'}
            </Button>
            {editingId && (
              <Button
                type="button"
                onClick={onCancelEdit}
                className="w-[100px] bg-gray-400 hover:bg-gray-500"
              >
                Cancel
              </Button>
            )}
          </div>
        </form>
      </div>

      {/* Todo List Section */}
      <div className="card">
        <div className="flex flex-col justify-between items-center">
          <div className="nav text-left">
            <span className="badge">{todos.length} items</span>
          </div>
          <TodoFilters
            filter={filter}
            setFilter={(f) => dispatch(setFilter(f))}
            items={todos.length}
          />
        </div>

        <div className="w-full p-[48px] mt-[20px] rounded-[7px] shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)]">
          <div className="flex gap-[15px] flex-wrap justify-center">
            {todos.map((t) => (
              <TodoItem
                key={t.id}
                todo={t}
                onToggle={(id) => dispatch(toggleTodo(id))}
                onEdit={() => onEdit(t)} // Fill form on edit
                onDelete={(id) => {dispatch(deleteTodo(id)); toast.success("Task Deleted Successfully! 🎉");}}
              />
            ))}
          </div>

          {todos.length === 0 && (
            <div className="text-center mt-[15px] text-gray-600">
              No tasks to show.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
