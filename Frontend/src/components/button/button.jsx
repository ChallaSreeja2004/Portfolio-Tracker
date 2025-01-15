import React from 'react';

const Button = ({
  onClick,
  text,
  logo,
  disabled = false,
  logoPosition = 'left',
  className = ''
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={text}
      className={`flex items-center gap-2 px-4 py-2 m-3 rounded-3xl text-white font-medium transition-all duration-200 ${
        disabled
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-green-800 hover:bg-green-600 active:bg-green-700'
      } ${className}`}
    >
      {logo && logoPosition === "left" && (
        <img src={logo} alt={`${text} logo`} className="w-6 h-6 " />
      )}
      <span>{text}</span>
      {logo && logoPosition === "right" && (
        <img src={logo} alt={`${text} logo`} className="w-6 h-6 " />
      )}
    </button>
  );
};

export default Button;
