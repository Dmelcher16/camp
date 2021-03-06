import React, { useContext, useState, useEffect } from "react";
import ExerciseContext from "../../utils/exerciseContext";
import { Col } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import "./Chart.css";

export function LeashChart() {
  const { exercises } = useContext(ExerciseContext);
  const [chartData, setChartData] = useState({});

  function createChart() {
    const result = [];
    let exerciseDate = [];
    let walkDuration = [];
    let pullDuration = [];

    //reduce array and tally total duration of walks and time spent pulling on the leash in each individual day
    exercises.reduce(function (res, value) {
      if (!res[value.day]) {
        res[value.day] = {
          day: value.day,
          leashDuration: 0,
          leashPullDuration: 0,
        };
        result.push(res[value.day]);
      }
      res[value.day].leashDuration += value.leashDuration;
      res[value.day].leashPullDuration += value.leashPullDuration;

      return res;
    }, {});

    for (const dataObj of result) {
      if (dataObj.leashDuration === 0 && dataObj.leashPullDuration === 0) {
        continue;
      }
      exerciseDate.push(dataObj.day);
      walkDuration.push(dataObj.leashDuration);
      pullDuration.push(dataObj.leashPullDuration);
    }

    setChartData({
      labels: exerciseDate,
      datasets: [
        {
          label: "Walk Duration",
          backgroundColor: "rgba(255, 159, 64, 0.8)",
          borderColor: "rgb(255, 159, 64)",
          borderWidth: 2,
          data: walkDuration,
        },
        {
          label: "Leash Pull Duration",
          backgroundColor: "rgba(1, 117, 1, 0.7)",
          borderColor: "rgb(1, 117, 1)",
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
  }
  useEffect(() => {
    createChart();
    // eslint-disable-next-line
  }, [exercises]);

  return (
    <Col md={6} className="chart-col">
      <div id="main-chart-div">
        <Bar
          aria-label="Leash Training Chart"
          data={chartData}
          options={chartData.options}
          height={75}
          width={150}
        />
      </div>
    </Col>
  );
}
