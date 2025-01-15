import React from 'react';

const Password = ({ placeholder, value, onChange, className = '' }) => {
  return (
    <input
      type="password"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`bg-white p-3 rounded-lg w-full shadow-md gap-2 border hover:bg-slate-100  focus:ring-black focus:border-black-500 mb-4 ${className} `}
    />
  );
};

export default Password;
