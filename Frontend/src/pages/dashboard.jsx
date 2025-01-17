import Raect from 'react';
import DistributionBarChart from '../components/apexCharts/chartContainers/distributionBarChart';
import DistributionPieContainer from '../components/apexCharts/chartContainers/distributionPieContainer';
import TotalValueContainer from '../components/apexCharts/chartContainers/totalValueChart';
const Dashboard = () => {
  return (
    <>
      <h1>DASHBOARD</h1>
      <DistributionBarChart />
      <DistributionPieContainer />
      <TotalValueContainer />
    </>
  );
};
export default Dashboard;
