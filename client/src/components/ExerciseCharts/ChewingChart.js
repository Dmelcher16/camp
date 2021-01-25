import React, { useContext, useState, useEffect } from "react";
import ExerciseContext from "../../utils/exerciseContext";
import { Col } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import "./Chart.css";

function ChewingChart() {
  const { exercises } = useContext(ExerciseContext);
  const [chartData, setChartData] = useState({});

  function createChart() {
    let exerciseDate = [];
    let itemsChewed = [];
    for (const dataObj of exercises) {
      if (dataObj.exercises === "Chewing") {
        exerciseDate.push(dataObj.day);
        itemsChewed.push(dataObj.chewing);
      }
    }

    setChartData({
      labels: exerciseDate,
      datasets: [
        {
          label: "Non-Toy Items Chewed/Destroyed",
          backgroundColor: "rgba(255, 159, 64, 0.8)",
          borderColor: "rgb(255, 159, 64)",
          pointRadius: 4,
          pointBackgroundColor: "rgb(255, 159, 64)",
          data: itemsChewed,
          lineTension: 0,
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
  }
  useEffect(() => {
    createChart();
  }, [exercises]);

  return (
    <Col md={6} className="chart-col">
      <div id="main-chart-div">
        <Line
          aria-label="Chewing Chart"
          data={chartData}
          options={chartData.options}
          height={75}
          width={150}
        />
      </div>
    </Col>
  );
}

export default ChewingChart;
