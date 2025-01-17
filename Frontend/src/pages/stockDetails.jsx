// import React from 'react';
// import StockTableHeader from '../components/tableContainer/header';
// import StockRow from '../components/tableContainer/rowContainer';
// import Button from '../components/button/button';
// import { FaPlusCircle } from 'react-icons/fa';

// const stocks = [
//   {
//     stockName: 'Apple Inc.',
//     ticker: 'AAPL',
//     quantity: 50,
//     dateOfBuy: '2023-06-15',
//     buyPrice: 145.67
//   },
//   {
//     stockName: 'Tesla',
//     ticker: 'TSLA',
//     quantity: 30,
//     dateOfBuy: '2023-08-20',
//     buyPrice: 275.5
//   },
//   {
//     stockName: 'Amazon',
//     ticker: 'AMZN',
//     quantity: 40,
//     dateOfBuy: '2023-09-10',
//     buyPrice: 125.75
//   }
// ];

// const StockDetailsPage = () => {
//   const handleEdit = (stock) => {
//     console.log('Edit', stock);
//   };

//   const handleDelete = (stock) => {
//     console.log('Delete', stock);
//   };

//   return (
//     <div className="container mx-auto py-6">
//       <StockTableHeader />

//       {stocks.map((stock, index) => (
//         <StockRow
//           key={index}
//           stock={stock}
//           handleEdit={handleEdit}
//           handleDelete={handleDelete}
//         />
//       ))}
//       <div className='flex justify-center mt-6'>
        
//         <Button
//           text="Add Stock"
//           logo={<FaPlusCircle size={25} />}
//           onClick={() => console.log('Add')}
//         />
//       </div>
//     </div>
//   );
// };

// export default StockDetailsPage;


import React, { useState } from 'react';
import StockTableHeader from '../components/tableContainer/header';
import StockRow from '../components/tableContainer/rowContainer';
import Button from '../components/button/button';
import AddStockForm from '../components/forms/addStockForm';
import EditStockForm from '../components/forms/editStockForm';
import { FaPlusCircle } from 'react-icons/fa';

const stocks = [
  {
    stockName: 'Apple Inc.',
    ticker: 'AAPL',
    quantity: 50,
    dateOfBuy: '2023-06-15',
    buyPrice: 145.67,
  },
  {
    stockName: 'Tesla',
    ticker: 'TSLA',
    quantity: 30,
    dateOfBuy: '2023-08-20',
    buyPrice: 275.5,
  },
  {
    stockName: 'Amazon',
    ticker: 'AMZN',
    quantity: 40,
    dateOfBuy: '2023-09-10',
    buyPrice: 125.75,
  },
];

const StockDetailsPage = () => {
  const [activePage, setActivePage] = useState('stocks'); 
  const [selectedStock, setSelectedStock] = useState(null); 
  const handleEdit = (stock) => {
    setSelectedStock(stock);
    setActivePage('editStock');
  };

  const handleAddStock = () => {
    setActivePage('addStock');
  };

  const handleBack = () => {
    setActivePage('stocks');
    setSelectedStock(null);
  };

  return (
    <div className="container mx-auto py-6">
      {activePage === 'stocks' && (
        <>
          <StockTableHeader />
          {stocks.map((stock, index) => (
            <StockRow
              key={index}
              stock={stock}
              handleEdit={() => handleEdit(stock)}
              handleDelete={(stock) => console.log('Delete', stock)}
            />
          ))}
          <div className="flex justify-center mt-6">
            <Button
              text="Add Stock"
              logo={<FaPlusCircle size={25} />}
              onClick={handleAddStock}
              className="bg-blue-700 text-white hover:bg-blue-500"
            />
          </div>
        </>
      )}

      {activePage === 'addStock' && (
        <div>
          <AddStockForm />
          <div className="flex justify-center mt-4">
            <Button
              text="Back"
              className="bg-gray-500 hover:bg-gray-400 text-white"
              onClick={handleBack}
            />
          </div>
        </div>
      )}

      {activePage === 'editStock' && selectedStock && (
        <div>
          <EditStockForm selectedStock={selectedStock} handleBack={handleBack} />
          <div className="flex justify-center mt-4">
            <Button
              text="Back"
              className="bg-gray-500 hover:bg-gray-400 text-white"
              onClick={handleBack}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default StockDetailsPage;
