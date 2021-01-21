import React, { useContext, useState, useEffect } from "react";
import ExerciseContext from "../../utils/exerciseContext";
import { Col } from "react-bootstrap";
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
      options: {
        title: {
          display: true,
          text: "Leash Training",
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                min: 0,
              },
            },
          ],
        },
      },
    });
    console.log(pullDuration);
  }
  useEffect(() => {
    createChart();
  }, [exercises]);

  // height={75} width={150}

  return (
    <Col md={6} className="chart-col">
      <div id="main-chart-div">
        <Bar
          data={chartData}
          options={chartData.options}
          height={75}
          width={150}
        />
      </div>
    </Col>
  );
}

export default LeashChart;
