import React from "react";
import Chart from 'chart.js/auto';
import { Bar } from "react-chartjs-2";
import "./dashboard.css";

const BarChart = () => {
  const labels = ["Milk", "Egg", "Paneer", "Curd"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Bar chart dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2],
      },
    ],
  };
  return (
    <div className="barChartClass">
      <Bar data={data} />
    </div>
  );
};

export default BarChart;