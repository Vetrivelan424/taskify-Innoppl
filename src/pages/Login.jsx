import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm';
import TextField from '../components/TextField';
import Button from '../components/Button';
import { loginThunk } from '../features/auth/authSlice';
import logo from '../Images/logo/taskify-logo.png'
import { toast } from "react-toastify";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector((s) => s.auth.status);
  const error = useSelector((s) => s.auth.error);
  const isAuthed = useSelector((s) => s.auth.isAuthenticated);

  const { values, errors, onChange, validate } = useForm({ username: '', password: '' });

  useEffect(() => {
    if (isAuthed) {navigate('/dashboard')
        setTimeout(()=>{
      toast.success("Logged in Successfully! 🎉");
    },1000)
    };
  }, [isAuthed, navigate]);

  const onSubmit = (e) => {
    e.preventDefault();
    const ok = validate({ username: { required: true }, password: { required: true } });
    if (!ok) return;
    dispatch(loginThunk({ username: values.username, password: values.password }));
  };

  return (
      <div
        className="flex flex-col  justify-center items-center h-[510px] lg:flex-row w-full overflow-y-scroll [scrollbar-width:none] 
      [-ms-overflow-style:none] bg-[url('../../assets/images/login-bg.webp')] bg-no-repeat bg-cover !px-0"
      >
    <div className="card flex flex-col justify-center items-center w-[480px] h-[480px] p-[48px] shadow-[3px_3px_4px_3px_rgba(0,0,0,0.1)] rounded">
      <h2 className='font-bold text-[24px] w-full text-center mb-[11px]'>Welcome Back!</h2>
              <img src={logo} alt='logo' width={130}></img>
      <form onSubmit={onSubmit} className="grid w-full" style={{ gap: 12 }}>
        <TextField label="Username" name="username" value={values.username} onChange={onChange} error={errors.username} placeholder="demo" />
        <TextField label="Password" name="password" type="password" value={values.password} onChange={onChange} error={errors.password} placeholder="demo123" />
        <Button type="submit" className="w-full" disabled={status === 'loading'}>{status === 'loading' ? 'Signing in…' : 'Log In'}</Button>
        {error && <div className="helper" role="alert">{error}</div>}
        <div className="helper">Try <strong>demo / demo123</strong></div>
      </form>
    </div>
    </div>
  );
}