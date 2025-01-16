import React from 'react';
import PieChart from '../chartComponents/pieChart';
const DistributionPieContainer = () => {
  const options = {
    chart: {
      type: 'donut'
    },
    labels: ['AMZN', 'APL', 'IBM', 'MSFT', 'TSLA', 'AAPL', 'GOOG', 'FB'],

    title: {
      text: 'Portfolio Distribution',
      align: 'center',
      style: {
        fontSize: '20px'
      }
    },
    plotOptions: {
      pie: {
        expandOnClick: true
      }
    },
    legend: {
        position: 'bottom'
      }
  };
  const chartSeries = [10, 20, 30, 40, 50, 60, 70, 80];

  return (
    <div className="max-w-lg mx-auto p-8 px-8 py-6 bg-white shadow-lg rounded-lg mb-4">
      <PieChart options={options} series={chartSeries} type="pie" />
    </div>
  );
};
export default DistributionPieContainer;
