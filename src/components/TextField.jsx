import React from 'react';
export default function TextField({ label, name, type = 'text', value, onChange, placeholder, error }) {
  return (
    <div className='flex flex-col w-full'>
      <label className="label mb-[10px] text-[14px] font-medium" htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} className="input border border-[#bdc1caff] px-[12px] rounded-[4px] h-[42px]" value={value} onChange={onChange} placeholder={placeholder} />
      {/* {error && <div className="helper" role="alert">{error}</div>} */}
      <p className='text-red-500 text-[12px] h-[12px] mt-[5px]'>
                  {error?error : ''}
                </p>
    </div>
  );
}