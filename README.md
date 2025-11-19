# Taskify (React + Hooks + Redux)

A simple user management system with login, profile edit, and to-do CRUD + filters. State is managed with Redux Toolkit and persisted to Local Storage.

## Features
- Login with hardcoded or mock API credentials
- Protected routes (Dashboard, Profile, Todos)
- Profile view/edit with basic validation
- Todo CRUD and filters (All, Completed, Pending)
- Logout (clears Redux + Local Storage)
- Clean responsive UI with basic CSS

## Quick Start
```bash
npm i
npm run dev
```

App defaults:
- **Username:** demo
- **Password:** demo123

## Live Demo
[Click here for live demo](https://main.d1moibjlehff23.amplifyapp.com)

## Scripts
- `npm run dev` - start dev server (Vite)
- `npm run build` - production build
- `npm run preview` - preview production build locally

## Tech
- React 18, React Router v6
- Redux Toolkit, React-Redux
- Vite

## Structure
See the `src/` folder for features, pages, components, and store setup.

# Project Structure

```
Taskify/
├── package.json
├── README.md
├── public/
│   └── index.html
└── src/
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── routes/ProtectedRoute.jsx
    ├── store/
    │   ├── index.js
    │   └── persist.js
    ├── utils/localStorage.js
    ├── api/mockAuth.js
    ├── hooks/useForm.js
    ├── components/
    │   ├── Navbar.jsx
    │   ├── TextField.jsx
    │   ├── Button.jsx
    │   ├── TodoItem.jsx
    │   └── TodoFilters.jsx
    ├── features/
    │   ├── auth/authSlice.js
    │   └── todos/todosSlice.js
    └── pages/
        ├── Login.jsx
        ├── Dashboard.jsx
        ├── Profile.jsx
        └── Todos.jsx
```

---
