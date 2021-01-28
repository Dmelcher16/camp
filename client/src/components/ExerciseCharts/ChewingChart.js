import React, { useContext, useState, useEffect } from "react";
import ExerciseContext from "../../utils/exerciseContext";
import { Col } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import "./Chart.css";

export function ChewingChart() {
  const { exercises } = useContext(ExerciseContext);
  const [chartData, setChartData] = useState({});

  function createChart() {
    const result = [];
    let exerciseDate = [];
    let itemsChewed = [];

    //reduce array and tally total number of items chewed by each individual day
    exercises.reduce(function (res, value) {
      if (!res[value.day]) {
        res[value.day] = {
          day: value.day,
          chewing: 0,
        };
        result.push(res[value.day]);
      }
      res[value.day].chewing += value.chewing;

      return res;
    }, {});

    for (const dataObj of result) {
      if (dataObj.chewing === 0) {
        continue;
      }
      exerciseDate.push(dataObj.day);
      itemsChewed.push(dataObj.chewing);
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
          text: "# of Non-Toys Chewed/Destroyed",
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
