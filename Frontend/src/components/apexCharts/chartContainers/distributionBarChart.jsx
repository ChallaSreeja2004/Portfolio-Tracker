import React from 'react';
import ColumnChart from '../chartComponents/columnChart';
const DistributionBarChart = () => {
  const Options = {
    chart: {
      type: 'bar',
      height: 400
    },
    plotOptions: {
      bar: {
        distributed: true,
        horizontal: false,
        columnWidth: '50%',
        endingShape: 'rounded'
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['AMZN', 'APL', 'IBM', 'MSFT', 'TSLA', 'AAPL', 'GOOG', 'FB']
    },
    title: {
      text: 'Stocks',
      align: 'center',
      style: {
        fontSize: '20px'
      }
    }
  };
  const chartSeries = [
    {
      name: 'Prices',
      data: [10, 20, 30, 40, 50, 60, 70, 80]
    }
  ];
  return (
    <div className="max-w-lg mx-auto p-8 px-8 py-6 bg-white shadow-lg rounded-lg mb-4">
      <ColumnChart options={Options} series={chartSeries} />
    </div>
  );
};
export default DistributionBarChart;
