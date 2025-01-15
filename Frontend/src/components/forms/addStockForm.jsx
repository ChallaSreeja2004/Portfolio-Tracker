import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import InputField from '../inputs/input';
import Button from '../button/button';

const AddStockForm = () => {
  const navigate = useNavigate(); 

  const[stockName,setStockName]=useState('')
  const[ticker,setTicker]=useState('')
  const[quantity,setQuantity]=useState('')
  const[dateOfBuy,setDateOfBuy]=useState('')
  const[buyPrice,setBuyPrice]=useState('')

  const handleTextChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleStockNameChange = (e) => {
    setStockName(e.target.value);
  };
  const handleTickerChange = (e) => {
    setTicker(e.target.value);
  };
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  const handleDateOfBuyChange=(e)=>{
    setDateOfBuy(e.target.value)
  }
  const handleBuyPriceChange=(e)=>{
    setBuyPrice(e.target.value)
  }
  const handleRegister=()=>{
    alert('Successfully added stock')
    navigate('/stocks')
  }

  return (
    <div className="max-w-lg mx-auto p-8 px-8 py-6 bg-white shadow-lg rounded-lg mb-4">
      <h2 className="text-2xl font-bold text-center text-black mb-4">
        Add Stock Form
      </h2>
      <div>
        <label>Stock Name</label>
        <InputField
          placeholder="Stock Name"
          value={stockName}
          onChange={handleStockNameChange}
          type="text"
        />
        <label> Ticker</label>
        <InputField
          placeholder="Ticker"
          value={ticker}
          onChange={handleTickerChange}
          type="text"
        />
        <label> Quantity</label>
        <InputField
          placeholder="Quantity"
          value={quantity}
          onChange={handleQuantityChange}
          type="text"
        />
        <label> Date of Buy</label>
        <InputField
          placeholder="Date of Buy"
          value={dateOfBuy}
          onChange={handleDateOfBuyChange}
          type="date"
        />
        <label> Buy Price </label>
        <InputField
          placeholder="Buy Price"
          value={buyPrice}
          onChange={handleBuyPriceChange}
          type="number"
        />

        <div className="flex justify-center items-center">
          <Button
            onClick={handleRegister}
            text=" Add Stock"
            logoPosition="right"
            logo="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20id%3D%22Button-Circle-Right-1--Streamline-Nova%22%20height%3D%2224%22%20width%3D%2224%22%3E%3Cdesc%3EButton%20Circle%20Right%201%20Streamline%20Icon%3A%20https%3A%2F%2Fstreamlinehq.com%3C%2Fdesc%3E%3Cpath%20fill%3D%22%23ffffff%22%20fill-rule%3D%22evenodd%22%20d%3D%22M12%200C5.37258%200%200%205.37258%200%2012c0%206.6274%205.37258%2012%2012%2012%206.6274%200%2012%20-5.3726%2012%20-12%200%20-6.62742%20-5.3726%20-12%20-12%20-12Zm7%2012%20-6%20-5.80005v3.84695H5.03271v4H13V17.8l6%20-5.8Z%22%20clip-rule%3D%22evenodd%22%20stroke-width%3D%221%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
            className="bg-green-700 hover:bg-green-600 active:bg-green-700 text-white p-3 rounded-lg shadow-md mr-3 "
          />
        </div>
      </div>
    </div>
  );
};

export default AddStockForm;
