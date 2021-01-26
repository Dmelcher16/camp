import React, { useContext, useState, useEffect } from "react";
import ExerciseContext from "../../utils/exerciseContext";
import { Col } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import "./Chart.css";

function CommandsChart() {
  const { exercises } = useContext(ExerciseContext);
  const [chartData, setChartData] = useState({});

  function createChart() {
    console.log(exercises);

    const result = [];
    let exerciseDate = [];
    let attempts = [];
    let successes = [];

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

    console.log(result);

    // const groupBy = function (arr, key) {
    //   return arr.reduce(function (curr, acc) {
    //     (curr[acc[key]] = curr[acc[key]] || []).push(acc);
    //     return curr;
    //   }, {});
    // };

    // exerciseDate.push(groupBy(exercises, "day"));
    // console.log(exerciseDate);

    for (const dataObj of result) {
      console.log(dataObj.day);
      if (dataObj.commandsCompleted === 0 && dataObj.commandsAttempted === 0) {
        continue;
      }
      exerciseDate.push(dataObj.day);
      attempts.push(dataObj.commandsAttempted);
      successes.push(dataObj.commandsCompleted);
    }

    // const talliedExercises = Object.values(exercises.reduce((acc, {day, commandsAttempted, commandsCompleted, ...r}) => {
    //   const key = JSON.stringify(r);
    //   acc[key] = (acc[key]  || {...r, commandsAttempted: 0});
    //   return (acc[key].commandsAttempted += commandsAttempted, acc);
    // }, {}));
    // console.log(talliedExercises);

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

export default CommandsChart;
