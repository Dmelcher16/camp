import React, { useContext, useState, useEffect } from "react";
import ExerciseContext from "../../utils/exerciseContext";
import { Col } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import "./Chart.css";

export function SitStayChart() {
  const { exercises } = useContext(ExerciseContext);
  const [chartData, setChartData] = useState({});

  function createChart() {
    const result = [];
    let exerciseDate = [];
    let attempts = [];
    let successes = [];

    //reduce array and tally total number of commandsAttempted and commandsCompleted by each individual day
    exercises.reduce(function (res, value) {
      if (!res[value.day]) {
        res[value.day] = {
          day: value.day,
          sitStayAttempts: 0,
          sitStaySuccess: 0,
        };
        result.push(res[value.day]);
      }
      res[value.day].sitStayAttempts += value.sitStayAttempts;
      res[value.day].sitStaySuccess += value.sitStaySuccess;

      return res;
    }, {});

    for (const dataObj of result) {
      if (dataObj.sitStayAttempts === 0 && dataObj.sitStaySuccess === 0) {
        continue;
      }
      exerciseDate.push(dataObj.day);
      attempts.push(dataObj.sitStayAttempts);
      successes.push(dataObj.sitStaySuccess);
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
    // eslint-disable-next-line
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
