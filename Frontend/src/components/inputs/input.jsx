import React from 'react';

const InputField = ({
  id,
  name,
  placeholder = "",
  value,
  onChange,
  type = "text",
  className = "",
}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`bg-white p-3 rounded-lg w-full shadow-lg border hover:bg-slate-100 focus:ring-black focus:border-black mb-4 ${className}`}
    />
  );
};

export default InputField;
