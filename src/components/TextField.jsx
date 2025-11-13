import React from 'react';
export default function TextField({ label, name, type = 'text', value, onChange, placeholder, error }) {
  return (
    <div>
      <label className="label" htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} className="input" value={value} onChange={onChange} placeholder={placeholder} />
      {error && <div className="helper" role="alert">{error}</div>}
    </div>
  );
}