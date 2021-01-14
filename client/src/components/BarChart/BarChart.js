import React from "react";
import { Bar } from "react-chartjs-2";
import "./BarChart.css";

function BarChart() {
  const data = {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        label: "Attempts",
        backgroundColor: "blue",
        data: [10, 20, 30, 40, 50, 60, 70],
      },
      {
        label: "Successes",
        backgroundColor: "green",
        data: [5, 10, 15, 20, 25, 30, 35],
      },
    ],
  };

  return (
    <div id="main-chart-div">
      <Bar data={data} height={75} width={150} />
    </div>
  );
}

export default BarChart;
