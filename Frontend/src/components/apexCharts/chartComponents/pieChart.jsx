import React from 'react';
import Chart from 'react-apexCharts';

const PieChart = ({ options, series, isDonut = false, height = 400 }) => {
  return (
    <Chart
      options={options}
      series={series}
      type={isDonut ? 'donut' : 'pie'}
      height={height}
    />
  );
};

export default PieChart;
