import React from 'react';
import PieChart from '../chartComponents/pieChart';

const TotalValueContainer = () => {
  const chartSeries = [10, 20, 30, 40, 50, 60, 70, 80];

  // Calculate the total value
  const totalValue = chartSeries.reduce((sum, value) => sum + value, 0);

  const options = {
    chart: {
      type: 'donut'
    },
    labels: ['AMZN', 'APL', 'IBM', 'MSFT', 'TSLA', 'AAPL', 'GOOG', 'FB'],
    title: {
      text: 'Stocks',
      align: 'center',
      style: {
        fontSize: '20px'
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '65%', // Adjust the donut size
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Total',
              formatter: () => `${totalValue}` // Display total value
            }
          }
        }
      }
    },
    legend: {
      position: 'bottom'
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg mb-4">
      <PieChart options={options} series={chartSeries} isDonut={true} />
    </div>
  );
};

export default TotalValueContainer;
