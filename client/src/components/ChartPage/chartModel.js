import React from "react";
import PChart from "./pottyChart";
import Chart from "./dogCharts";
import AppNav from "../AppNav/AppNav";

function chartPage() {
  return (
    <div style={{backgroundColor: "darkgray"}}>
      <AppNav />
      <PChart />
      <Chart />
    </div>
  );
}

export default chartPage;
