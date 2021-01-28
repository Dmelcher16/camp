import React, { useContext, useState, useEffect } from "react";
import ExerciseContext from "../../utils/exerciseContext";
import { Col } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import "./Chart.css";

export function CommandsChart() {
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
          commandsAttempted: 0,
          commandsCompleted: 0,
        };
        result.push(res[value.day]);
      }
      res[value.day].commandsAttempted += value.commandsAttempted;
      res[value.day].commandsCompleted += value.commandsCompleted;

      return res;
    }, {});

    for (const dataObj of result) {
      if (dataObj.commandsCompleted === 0 && dataObj.commandsAttempted === 0) {
        continue;
      }
      exerciseDate.push(dataObj.day);
      attempts.push(dataObj.commandsAttempted);
      successes.push(dataObj.commandsCompleted);
    }

    //set state for commands chart data
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
          text: "Commands",
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
          aria-label="Commands Chart"
          data={chartData}
          options={chartData.options}
          height={75}
          width={150}
        />
      </div>
    </Col>
  );
}
