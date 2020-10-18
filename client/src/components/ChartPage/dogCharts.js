import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import AppNav from '../AppNav/AppNav.js'
import './dogCharts.css'

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          "Boston",
          "Worcester",
          "Springfield",
          "Lowell",
          "Cambridge",
          "New Bedford",
        ],
        datasets: [
          {
            label: "Population",
            data: [617594, 181045, 153060, 106519, 105162, 95072],
            //backgroundColor:'green',
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)",
            ],
            borderWidth: 1,
            borderColor: "#777",
            hoverBorderWidth: 3,
            hoverBorderColor: "#000",
          },
        ],
      },
    };
  }

  render() {
    return (
        <div className="chartBG">
        <div className="chart">
        <AppNav id="link-name2" />
        <Bar
          data={this.state.chartData}
          //   width={}
          //   height={}
          options={{
              title: {
                  display: true,
                  text: "Largest Cities In Massachusetts",
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

export default Chart;

// let myChart = document.getElementById('myChart').getContext('2d');

//     // Global Options
//     Chart.defaults.global.defaultFontFamily = 'Lato';
//     Chart.defaults.global.defaultFontSize = 18;
//     Chart.defaults.global.defaultFontColor = '#777';

//     let massPopChart = new Chart(myChart, {
//       type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
//       data:{
//         labels:['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
//         datasets:[{
//           label:'Population',
//           data:[
//             617594,
//             181045,
//             153060,
//             106519,
//             105162,
//             95072
//           ],
//           //backgroundColor:'green',
//           backgroundColor:[
//             'rgba(255, 99, 132, 0.6)',
//             'rgba(54, 162, 235, 0.6)',
//             'rgba(255, 206, 86, 0.6)',
//             'rgba(75, 192, 192, 0.6)',
//             'rgba(153, 102, 255, 0.6)',
//             'rgba(255, 159, 64, 0.6)',
//             'rgba(255, 99, 132, 0.6)'
//           ],
//           borderWidth:1,
//           borderColor:'#777',
//           hoverBorderWidth:3,
//           hoverBorderColor:'#000'
//         }]
//       },
//       options:{
//         title:{
//           display:true,
//           text:'Largest Cities In Massachusetts',
//           fontSize:25
//         },
//         legend:{
//           display:true,
//           position:'right',
//           labels:{
//             fontColor:'#000'
//           }
//         },
//         layout:{
//           padding:{
//             left:50,
//             right:0,
//             bottom:0,
//             top:0
//           }
//         },
//         tooltips:{
//           enabled:true
//         }
//       }
//     });
