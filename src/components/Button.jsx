import React from 'react';
export default function Button({ children, type = 'button', variant = 'primary', ...rest }) {
  const cls = ['btn'];
  if (variant === 'secondary') cls.push('secondary');
  if (variant === 'danger') cls.push('danger');
  return (
    <button className={cls.join(' ')} type={type} {...rest}>
      {children}
    </button>
  );
}