import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../hooks/useForm';
import TextField from '../components/TextField';
import Button from '../components/Button';
import { updateProfile } from '../features/auth/authSlice';

export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((s) => s.auth.user) || { username: '', email: '' };
  const { values, errors, onChange, validate } = useForm({ username: user.username, email: user.email });

  const onSubmit = (e) => {
    e.preventDefault();
    const ok = validate({ username: { required: true }, email: { required: true, pattern: /.+@.+\..+/ , message: 'Enter a valid email' } });
    if (!ok) return;
    dispatch(updateProfile({ username: values.username.trim(), email: values.email.trim() }));
    alert('Profile saved');
  };

  return (
    <div className="card" style={{ maxWidth: 540, margin: '0 auto' }}>
      <h2>Profile</h2>
      <form onSubmit={onSubmit} className="grid" style={{ gap: 12 }}>
        <TextField label="Username" name="username" value={values.username} onChange={onChange} error={errors.username} />
        <TextField label="Email" name="email" type="email" value={values.email} onChange={onChange} error={errors.email} />
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
}