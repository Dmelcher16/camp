import React, { useContext, useState, useEffect } from "react";
import ExerciseContext from "../../utils/exerciseContext";
import { Bar } from "react-chartjs-2";
import "./Chart.css";

function CommandsChart() {
  const { exercises } = useContext(ExerciseContext);
  const [chartData, setChartData] = useState({});

  function createChart() {
    console.log(exercises);
    let exerciseDate = [];
    let attempts = [];
    let successes = [];
    for (const dataObj of exercises) {
      if (dataObj.exercises === "Commands") {
        exerciseDate.push(dataObj.day);
        attempts.push(dataObj.commandsAttempted);
        successes.push(dataObj.commandsCompleted);
      }
    }

    setChartData({
      title: "Commands",
      labels: exerciseDate,
      datasets: [
        {
          label: "Attempts",
          backgroundColor: "blue",
          data: attempts,
        },
        {
          label: "Successes",
          backgroundColor: "green",
          data: successes,
        },
      ],
    });
  }
  useEffect(() => {
    createChart();
  }, [exercises]);

  // height={75} width={150}

  return (
    <div id="main-chart-div">
      <Bar data={chartData}  height={75} width={150} />
    </div>
  );
}

export default CommandsChart;
