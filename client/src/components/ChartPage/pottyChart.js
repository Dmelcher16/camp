import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import './dogCharts.css'


class PChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          "13th",
          "14th",
          "15th",
          "16th",
          "17th",
          "18th",
        ],
        labels: ["13th", "14th", "15th","16th", "17th", "18th"],
        datasets: [
            {
                label: "Accidents",
                backgroundColor: "red",
                data: [3, 4, 3, 2, 3, 1]
            },
            {
                label: "Sucesses",
                backgroundColor: "green",
                data: [4, 3, 4, 5, 4, 6]
            },
        ]
      },
    };
  }


  render() {
    return (
        <div className="chartBG">
        <div className="chart">
        <Bar
          data={this.state.chartData}
          //   width={}
          //   height={}
          options={{
              title: {
                  display: true,
                  text: "Potty training",
                  fontSize: 25,
                },
                legend: {
                    display: true,
                    position: "right",
                    labels: {
                        fontColor: "#000",
                    },
                },
            }}
            />
      </div>
            </div>
    );
  }
  
}

export default PChart;