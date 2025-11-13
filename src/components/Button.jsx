import React from 'react';
export default function Button({ children, type = 'button', className="",variant = 'primary', ...rest }) {
  const cls = [''];
  if (variant === 'secondary') cls.push('secondary');
  if (variant === 'danger') cls.push('danger');
  return (
    <button className={`${className} btn  bg-[#0083ff] text-white rounded-[4px] h-[40px] mt-[20px] hover:bg-[#1A1AB3aa] cursor-pointer`} type={type} {...rest}>
      {children}
    </button>
  );
}