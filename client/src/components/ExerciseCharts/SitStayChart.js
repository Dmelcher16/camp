import React, { useContext, useState, useEffect } from "react";
import ExerciseContext from "../../utils/exerciseContext";
import { Col } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import "./Chart.css";

function SitStayChart() {
  const { exercises } = useContext(ExerciseContext);
  const [chartData, setChartData] = useState({});

  function createChart() {
    let exerciseDate = [];
    let attempts = [];
    let successes = [];
    for (const dataObj of exercises) {
      if (dataObj.exercises === "Sit/Stay") {
        exerciseDate.push(dataObj.day);
        attempts.push(dataObj.sitStayAttempts);
        successes.push(dataObj.sitStaySuccess);
      }
    }

    setChartData({
      labels: exerciseDate,
      datasets: [
        {
          label: "Attempts",
          backgroundColor: "rgba(255, 159, 64, 0.8)",
          borderColor: "rgb(255, 159, 64)",
          borderWidth: 2,
          data: attempts,
        },
        {
          label: "Successes",
          backgroundColor: "rgba(1, 117, 1, 0.7)",
          borderColor: "rgb(1, 117, 1)",
          data: successes,
        },
      ],
      options: {
        title: {
          display: true,
          text: "Sit/Stay Training",
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }
  useEffect(() => {
    createChart();
  }, [exercises]);

  return (
    <Col md={6} className="chart-col">
      <div id="main-chart-div">
        <Bar
          aria-label="Sit/Stay Training Chart"
          data={chartData}
          options={chartData.options}
          height={75}
          width={150}
        />
      </div>
    </Col>
  );
}

export default SitStayChart;
