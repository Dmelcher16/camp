import React, { useContext, useState, useEffect } from "react";
import ExerciseContext from "../../utils/exerciseContext";
import { Bar } from "react-chartjs-2";
import "./Chart.css";

function LeashChart() {
  const { exercises } = useContext(ExerciseContext);
  const [chartData, setChartData] = useState({});

  function createChart() {
    console.log(exercises);
    let exerciseDate = [];
    let walkDuration = [];
    let pullDuration = [];
    for (const dataObj of exercises) {
      if (dataObj.exercises === "Leash Training") {
        exerciseDate.push(dataObj.day);
        walkDuration.push(dataObj.leashDuration);
        pullDuration.push(dataObj.leashPullDuration);
      }
    }

    setChartData({
      labels: exerciseDate,
      datasets: [
        {
          label: "Walk Duration",
          backgroundColor: "blue",
          data: walkDuration,
        },
        {
          label: "Leash Pull Duration",
          backgroundColor: "green",
          data: pullDuration,
        },
      ],
    });
    console.log(pullDuration)
  }
  useEffect(() => {
    createChart();
  }, [exercises]);

  // height={75} width={150}

  return (
    <div id="main-chart-div">
      <Bar data={chartData} height={75} width={150} />
    </div>
  );
}

export default LeashChart;
