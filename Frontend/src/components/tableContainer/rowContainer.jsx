import React from 'react';
import LightLabel from '../tableComponents/lightLabel'; // Assuming LightLabel is in this path
import { FaEdit, FaTrashAlt } from 'react-icons/fa'; // Importing FontAwesome icons

const StockRow = ({ stock, handleEdit, handleDelete }) => {
  return (
    <div className="grid grid-cols-6 gap-4 mb-4">
      <LightLabel>{stock.stockName}</LightLabel>
      <LightLabel>{stock.ticker}</LightLabel>
      <LightLabel>{stock.quantity}</LightLabel>
      <LightLabel>{stock.dateOfBuy}</LightLabel>
      <LightLabel>${stock.buyPrice.toFixed(2)}</LightLabel>

      <div className="flex justify-center items-center space-x-4">
        <button
          onClick={() => handleEdit(stock)}
          className="text-green-800 hover:text-green-600"
        >
          <FaEdit size={20} />
        </button>
        <button
          onClick={() => handleDelete(stock)}
          className="text-red-800 hover:text-red-600"
        >
          <FaTrashAlt size={20} />
        </button>
      </div>
    </div>
  );
};

export default StockRow;
