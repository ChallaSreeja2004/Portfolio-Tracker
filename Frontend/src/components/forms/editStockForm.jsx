import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../inputs/input';
import Button from '../button/button';

const EditStockForm = () => {
  const navigate = useNavigate();

  const stockArray = [
    {
      stockName: 'Apple Inc.',
      ticker: 'AAPL',
      quantity: 50,
      dateOfBuy: '2023-06-15',
      buyPrice: 145.67
    },
    {
      stockName: 'Tesla',
      ticker: 'TSLA',
      quantity: 30,
      dateOfBuy: '2023-08-20',
      buyPrice: 275.5
    }
  ];

  const selectedStock = stockArray[0];

  const [formData, setFormData] = useState({
    stockName: '',
    ticker: '',
    quantity: '',
    dateOfBuy: '',
    buyPrice: ''
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!isEditing) {
      setFormData({
        stockName: selectedStock.stockName,
        ticker: selectedStock.ticker,
        quantity: selectedStock.quantity,
        dateOfBuy: selectedStock.dateOfBuy,
        buyPrice: selectedStock.buyPrice
      });
      setIsEditing(true);
    }
  }, [isEditing, selectedStock]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleEdit = () => {
    alert('Successfully edited stock');
    navigate('/stocks');
  };

  return (
    <div className="max-w-lg mx-auto p-8 px-8 py-6 bg-white shadow-lg rounded-lg mb-4">
      <h2 className="text-2xl font-bold text-center text-black mb-4">Edit Stock Form</h2>
      <div>
        <label>Stock Name</label>
        <InputField
          name="stockName"
          placeholder="Stock Name"
          value={formData.stockName}
          onChange={handleChange}
          type="text"
        />

        <label>Ticker</label>
        <InputField
          name="ticker"
          placeholder="Ticker"
          value={formData.ticker}
          onChange={handleChange}
          type="text"
        />

        <label>Quantity</label>
        <InputField
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          type="text"
        />

        <label>Date of Buy</label>
        <InputField
          name="dateOfBuy"
          placeholder="Date of Buy"
          value={formData.dateOfBuy}
          onChange={handleChange}
          type="date"
        />

        <label>Buy Price</label>
        <InputField
          name="buyPrice"
          placeholder="Buy Price"
          value={formData.buyPrice}
          onChange={handleChange}
          type="number"
        />

        <div className="flex justify-center items-center mt-4">
          <Button
            onClick={handleEdit}
            text="Edit Stock"
            logoPosition="right"
            logo="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20id%3D%22Button-Circle-Right-1--Streamline-Nova%22%20height%3D%2224%22%20width%3D%2224%22%3E%3Cdesc%3EButton%20Circle%20Right%201%20Streamline%20Icon%3A%20https%3A%2F%2Fstreamlinehq.com%3C%2Fdesc%3E%3Cpath%20fill%3D%22%23ffffff%22%20fill-rule%3D%22evenodd%22%20d%3D%22M12%200C5.37258%200%200%205.37258%200%2012c0%206.6274%205.37258%2012%2012%2012%206.6274%200%2012%20-5.3726%2012%20-12%200%20-6.62742%20-5.3726%20-12%20-12%20-12Zm7%2012%20-6%20-5.80005v3.84695H5.03271v4H13V17.8l6%20-5.8Z%22%20clip-rule%3D%22evenodd%22%20stroke-width%3D%221%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
            className="bg-green-700 hover:bg-green-600 active:bg-green-700 text-white p-3 rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default EditStockForm;
