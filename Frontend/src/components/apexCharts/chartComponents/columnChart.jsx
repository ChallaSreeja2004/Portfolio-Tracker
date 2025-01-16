import React from 'react';
import Chart from 'react-apexCharts';
const ColumnChart = ({options,series,height=400}) => {
  
  return <Chart options={options} series={series} type="bar" height={height} />;
};
export default ColumnChart;
