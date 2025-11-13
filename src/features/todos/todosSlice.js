import { createSlice, nanoid, createSelector } from '@reduxjs/toolkit';

const initialState = {
  items: [], // {id, user, title, description, completed}
  filter: 'all',
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: ({ user, title, description }) => {
        const id = nanoid();
        return { payload: { id, user, title, description, completed: false } };
      },
    },
    toggleTodo: (state, action) => {
      const id = action.payload;
      const item = state.items.find((t) => t.id === id);
      if (item) item.completed = !item.completed;
    },
    updateTodo: (state, action) => {
      const { id, title, description } = action.payload;
      const item = state.items.find((t) => t.id === id);
      if (item) {
        if (title != null) item.title = title;
        if (description != null) item.description = description;
      }
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((t) => t.id !== id);
    },
    setFilter: (state, action) => {
      state.filter = action.payload; // all | completed | pending
    },
    deleteAllForUser: (state, action) => {
      const user = action.payload;
      state.items = state.items.filter((t) => t.user !== user);
    },
  },
});

export const { addTodo, toggleTodo, updateTodo, deleteTodo, setFilter, deleteAllForUser } = todosSlice.actions;

// selectors
export const selectTodosByUser = (username) => (state) => state.todos.items.filter((t) => t.user === username);
export const selectFilter = (state) => state.todos.filter;
export const selectVisible = createSelector([
  (_, username) => username,
  (state) => state.todos.items,
  (state) => state.todos.filter,
], (username, items, filter) => {
  const list = items.filter((t) => t.user === username);
  if (filter === 'completed') return list.filter((t) => t.completed);
  if (filter === 'pending') return list.filter((t) => !t.completed);
  return list;
});

export default todosSlice.reducer;