import React from "react";
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import "./dashboard.css";

const labels = ["Milk", "Egg", "Paneer", "Curd"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Line Chart Dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2],
    },
  ],
};

const LineChart = () => {
  return (
    <div className="lineChartClass">
      <Line data={data} />
    </div>
  );
};

export default LineChart;