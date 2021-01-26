import React, { useContext, useState, useEffect } from "react";
import ExerciseContext from "../../utils/exerciseContext";
import { Col } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import "./Chart.css";

function PottyTrainingChart() {
  const { exercises } = useContext(ExerciseContext);
  const [chartData, setChartData] = useState({});

  function createChart() {
    let exerciseDate = [];
    let accidents = [];
    let successes = [];
    for (const dataObj of exercises) {
      if (dataObj.exercises === "Potty Training") {
        exerciseDate.push(dataObj.day);
        accidents.push(dataObj.numPottyAccidents);
        successes.push(dataObj.numPottySuccesses);
      }
    }

    setChartData({
      labels: exerciseDate,
      datasets: [
        {
          label: "Accidents",
          backgroundColor: "rgba(255, 159, 64, 0.8)",
          borderColor: "rgb(255, 159, 64)",
          borderWidth: 2,
          data: accidents,
        },
        {
          label: "Successes",
          backgroundColor: "rgba(1, 117, 1, 0.8)",
          borderColor: "rgb(1, 117, 1)",
          borderWidth: 2,
          data: successes,
        },
      ],
      options: {
        title: {
          display: true,
          text: "Potty Training",
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                precision: 0,
              },
            },
          ],
        },
      },
    });
  }
  useEffect(() => {
    createChart();
    // eslint-disable-next-line
  }, [exercises]);

  return (
    <Col md={6} className="chart-col">
      <div id="main-chart-div">
        <Bar
          aria-label="Potty Training Chart"
          data={chartData}
          options={chartData.options}
          height={75}
          width={150}
        />
      </div>
    </Col>
  );
}

export default PottyTrainingChart;
