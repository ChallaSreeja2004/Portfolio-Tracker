import React from 'react';
import DarkLabel from '../tableComponents/darkLabel'; // Assuming DarkLabel is in this path

const StockTableHeader = () => {
  return (
    <div className="grid grid-cols-6 gap-4 mb-6">
      <DarkLabel>Stock Name</DarkLabel>
      <DarkLabel>Ticker</DarkLabel>
      <DarkLabel>Quantity</DarkLabel>
      <DarkLabel>Date of Buy</DarkLabel>
      <DarkLabel>Buy Price</DarkLabel>
      <DarkLabel>Action</DarkLabel>
    </div>
  );
};

export default StockTableHeader;
