import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const user = useSelector((s) => s.auth.user);
  const username = user?.username || '—';

  return (
    <>
    
    <div className="card p-[25px] md:w-[80%] sm:w-[95%] lg:w-[70%] m-auto flex  flex-col  justify-center mb-[22px]">
      <div className='mb-[25px]'>
        <h2 className='text-[#171A1FFF] text-[30px] font-bold mb-[14px]'>Welcome back, {username}</h2>
      <p className="helper text-[#565D6DFF] text-[14px]">Let's get things done and organized efficiently.</p>
      </div>
      <div className="flex flex-wrap flex-col gap-[30px]  justify-center w-full">
        <div className='card flex flex-col justify-between w-full rounded-[7px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.1)] p-[24px] transition-all duration-500 
              ease-in-out transform hover:-translate-y-1 hover:shadow-[0px_0px_4px_3px_rgba(0,0,0,0.1)]'>
                <h3 className='text-[#171A1FFF] text-[24px] font-bold mb-[18px]'>Account Overview</h3>
                <div className='text-[18px]'>
                  <p className='mb-[8px]'>
                    <span className='font-bold'>Username :</span>
                    <span className='capitalize'> {username}</span>
                  </p>
                  <p className='mb-[8px]'>
                    <span className='font-bold'>Email-Id &nbsp; &nbsp;:</span>
                    <span className=''> {user.email}</span>
                  </p>
                </div>

        </div>
        <div className='flex flex-wrap md:flex-nowrap gap-[15px]'>
           <div className="card flex flex-col justify-between w-half rounded-[7px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.1)] p-[24px] transition-all duration-500 
              ease-in-out transform hover:-translate-y-1 hover:shadow-[0px_0px_4px_3px_rgba(0,0,0,0.1)]">
                <div>
                   <h3 className='text-[#171A1FFF] text-[24px] font-bold mb-[18px]'>Manage Your Profile</h3>
          <p className="helper text-[#565D6DFF] text-[14px]">Update your personal details, contact information, and preferences for a tailored experience.</p>
          
                </div>
         <Link className="btn w-full flex bg-[#0083ff] text-white items-center justify-center rounded-[4px] h-[40px] mt-[30px]" to="/profile">Go to Profile</Link>
        </div>
        <div className="card  flex flex-col justify-between w-half rounded-[7px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.1)] p-[24px] transition-all duration-500 
                ease-in-out transform hover:-translate-y-1 hover:shadow-[0px_0px_4px_3px_rgba(0,0,0,0.1)]">
          <div>
             <h3 className='text-[#171A1FFF] text-[24px] font-bold mb-[18px]'>Organize Your Tasks</h3>
          <p className="helper text-[#565D6DFF] text-[14px]">View, add, edit, and manage all your tasks efficiently. Stay on top of your priorities.</p>
         
          </div>
          <Link className="btn w-full flex bg-[#0083ff] text-white rounded-[4px] items-center justify-center h-[40px] mt-[30px]" to="/todos">Manage Todos</Link>
        </div>
        </div>
       
      </div>
    </div>
    </>
    
  );
}