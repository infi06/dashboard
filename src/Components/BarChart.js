import React, { useEffect } from "react";
import C3Chart from "c3";
import "c3/c3.css";
import "../styles/BarCharts.css";

const BarChart = () => {
  useEffect(() => {

    C3Chart.generate({
      bindto: "#bar-chart",
      data: {
        columns: [
          ["Direct", 245],
          ["Indirect", 45],
        ],
        type: "bar",
        colors: {
          Direct: "#007bff",
          Indirect: "#28a745",
        },
      },
      bar: {
        width: {
          ratio: 0.5,
        },
      },
      axis: {
        x: {
          label: "Category",
          type: "category",
          categories: ["Direct", "Indirect"],
        },
        y: {
          label: "Amount ($)",
        },
      },
    });


    C3Chart.generate({
      bindto: "#area-spline-chart",
      data: {
        columns: [
          ["Real-Time", 50, 65, 75, 85, 95, 100],
        ],
        type: "area-spline",
        colors: {
          "Real-Time": "#dc3545",
        },
      },
      axis: {
        x: {
          label: "Time",
          tick: {
            values: [1, 2, 3, 4, 5, 6],
          },
        },
        y: {
          label: "Value ($)",
        },
      },
    });
  }, []);

  return (
    <div className="charts-container">

      <div className="chart-card">
        <div className="chart-header">
        <h2>Direct Vs Indirect</h2>
        <h3>
  <span className="circle blue-circle"></span>$245 Direct
  <span className="circle violet-circle"></span>$45 Indirect
</h3>
        </div>
        <div id="bar-chart" className="chart-box"></div>
      </div>

      <div className="chart-card">
        <div className="chart-header">
          <h2>Real-Time Value</h2>
          <h1>
  $42,15 <sup className="percentage-badge">+45%</sup>
</h1>
        </div>
        <div id="area-spline-chart" className="chart-box"></div>
      </div>
    </div>
  );
};

export default BarChart;
