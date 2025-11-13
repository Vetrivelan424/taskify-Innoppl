import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import todosReducer from '../features/todos/todosSlice';
import { loadState, saveState } from '../utils/localStorage';

const preloaded = loadState();

const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todosReducer,
  },
  preloadedState: preloaded,
});

// Persist to localStorage on changes (auth & todos)
let prevState = store.getState();
store.subscribe(() => {
  const state = store.getState();
  if (state !== prevState) {
    saveState({ auth: state.auth, todos: state.todos });
    prevState = state;
  }
});

export default store;