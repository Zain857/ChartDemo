import React from "react";
import { Line } from "react-chartjs-2";

function Chart() {
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const data = {
    labels: MONTHS,
    datasets: [
      {
        label: "BitCoin Price",
        data: [75, 76, 85, 88, 90, 89, 80, 70, 75, 80, 78, 70],
        fill: false,
        // backgroundColor: "rgb(255, 99, 133)",
        borderColor: "rgb(255, 99, 133)",
        tension: 0.3,
      },

      {
        label: "Purchasing Power",
        data: [95, 97, 85, 75, 70, 75, 80, 83, 85, 86, 83, 97],
        fill: false,
        // backgroundColor: "rgb(22, 19, 241)",
        borderColor: "rgba(15, 15, 15, 0.815)",
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        suggestedMin: 70,
        suggestedMax: 100,
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div style={{ marginTop: "60px" }}>
      <div style={{ width: "1000px", margin: "auto" }}>
        <Line data={data} options={options} height={140} />
      </div>
    </div>
  );
}

export default Chart;
