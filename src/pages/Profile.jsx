import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../hooks/useForm';
import TextField from '../components/TextField';
import Button from '../components/Button';
import { updateProfile } from '../features/auth/authSlice';
import DummyImage from '../Images/logo/dummy_images.jpg';
import { toast } from "react-toastify";

export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((s) => s.auth.user) || { username: '', email: '' };
  const { values, errors, onChange, validate } = useForm({ username: user.username, email: user.email });

  const onSubmit = (e) => {
    e.preventDefault();
    const ok = validate({ username: { required: true }, email: { required: true, pattern: /.+@.+\..+/ , message: 'Enter a valid email' } });
    if (!ok) return;
    dispatch(updateProfile({ username: values.username.trim(), email: values.email.trim() }));
    toast.success("Profile saved Successfully! 🎉");
  };

  return (
    <div className="card p-[25px] md:w-[80%] sm:w-[95%] lg:w-[70%] m-auto flex  flex-col  justify-center mb-[22px]">
      <h2 className='text-[#171A1FFF] text-[30px] font-bold'>Profile</h2>
      <div className='flex-col flex mt-[28px] gap-[24px]'>
        <div className='flex gap-[24px] p-[24px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.1)] rounded-[7px] items-center'>
          <img className='w-[72px] h-[72px] rounded-full border border-[#bec7d6]' alt='profile image' src={DummyImage}></img>
          <div>
            <p className='text-[24px] capitalize'>{user.username}</p>
            <p className='text-[#565D6DFF] text-[14px]'>Taskify User</p>
          </div>
        </div>
        <div>
           <form onSubmit={onSubmit} className="grid text-[14px] p-[24px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.1)] rounded-[7px]">
            <div>
              <h3 className='text-[20px] font-bold mb-2'>Edit Profile</h3>
              <p className='text-[14px] mb-4'>Update your account settings.</p>
            </div>
            
        <TextField label="Username" name="username" value={values.username} onChange={onChange} error={errors.username} />
        <TextField label="Email" name="email" type="email" value={values.email} onChange={onChange} error={errors.email} />
        <div className='flex w-full justify-end'>
          <Button type="submit" className="w-[120px]">Save Changes</Button>
    
        </div>
          </form>
        </div>
      </div>
     
    </div>
  );
}