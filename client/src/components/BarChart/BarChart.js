import React, { useContext, useState, useEffect } from "react";
import ExerciseContext from "../../utils/exerciseContext";
import { Bar } from "react-chartjs-2";
import "./BarChart.css";

function BarChart() {
  const { exercises } = useContext(ExerciseContext);
  const [chartData, setChartData] = useState({});

  function createChart() {
    console.log(exercises);
    let exerciseDate = [];
    let attempts = [];
    let successes = [];
    for (const dataObj of exercises) {
      exerciseDate.push(dataObj.day);
      if (dataObj.commandsAttempted !== null) {
        attempts.push(dataObj.commandsAttempted);
      }
      if (dataObj.commandsCompleted !== null) {
        successes.push(dataObj.commandsCompleted);
      }
    }

    setChartData({
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
      <Bar data={chartData} height={75} width={150} />
    </div>
  );
}

export default BarChart;
