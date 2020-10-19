import React from "react";
import PChart from './pottyChart'
import Chart from './dogCharts'
import AppNav from "../AppNav/AppNav";

function chartPage() {
  return (
    <div>
      <AppNav />
      <PChart />
      <Chart />
    </div>
  );
}

export default chartPage
