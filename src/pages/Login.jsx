import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm';
import TextField from '../components/TextField';
import Button from '../components/Button';
import { loginThunk } from '../features/auth/authSlice';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector((s) => s.auth.status);
  const error = useSelector((s) => s.auth.error);
  const isAuthed = useSelector((s) => s.auth.isAuthenticated);

  const { values, errors, onChange, validate } = useForm({ username: '', password: '' });

  useEffect(() => {
    if (isAuthed) navigate('/dashboard');
  }, [isAuthed, navigate]);

  const onSubmit = (e) => {
    e.preventDefault();
    const ok = validate({ username: { required: true }, password: { required: true } });
    if (!ok) return;
    dispatch(loginThunk({ username: values.username, password: values.password }));
  };

  return (
    <div className="card" style={{ maxWidth: 420, margin: '40px auto' }}>
      <h2>Login</h2>
      <form onSubmit={onSubmit} className="grid" style={{ gap: 12 }}>
        <TextField label="Username" name="username" value={values.username} onChange={onChange} error={errors.username} placeholder="demo" />
        <TextField label="Password" name="password" type="password" value={values.password} onChange={onChange} error={errors.password} placeholder="demo123" />
        <Button type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Signing in…' : 'Login'}</Button>
        {error && <div className="helper" role="alert">{error}</div>}
        <div className="helper">Try <strong>demo / demo123</strong></div>
      </form>
    </div>
  );
}