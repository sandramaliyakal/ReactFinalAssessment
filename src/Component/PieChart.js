import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import "./dashboard.css";
const labels = ["Milk", "Egg", "Paneer", "Curd"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Pie  Chart dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(0,0,255)",
      data: [0, 10, 5, 2],
    },
  ],
};
const PieChart = () => {
  return (
    <div className="pieChartClass">
      <Pie data={data} />
    </div>
  );
};
export default PieChart;
