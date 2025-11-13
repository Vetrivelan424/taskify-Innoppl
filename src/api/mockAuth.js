// Very simple mock Auth API. Replace with real API if needed.
const USERS = [
  { username: 'demo', password: 'demo123', email: 'demo@acme.test' },
];

export const loginApi = async ({ username, password }) => {
  await new Promise((r) => setTimeout(r, 300));
  const found = USERS.find((u) => u.username === username && u.password === password);
  if (!found) {
    const err = new Error('Invalid username or password');
    err.status = 401;
    throw err;
  }
  // return a faux token
  return { token: Math.random().toString(36).slice(2), user: { username: found.username, email: found.email } };
};