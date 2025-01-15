import React from 'react';
const DarkLabel = ({ children }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg text-center font-semibold">
      {children}
    </div>
  );
};
export default DarkLabel;
