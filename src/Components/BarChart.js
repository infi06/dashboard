import React, { useEffect } from "react";
import C3Chart from "c3";
import "c3/c3.css"; // Import C3 styles
import "../styles/BarCharts.css"; // Custom styles

const BarChart = () => {
  useEffect(() => {
    // Create Bar Chart for "Direct Vs Indirect"
    C3Chart.generate({
      bindto: "#bar-chart", // Unique ID for the bar chart
      data: {
        columns: [
          ["Direct", 245], // Direct Value
          ["Indirect", 45], // Indirect Value
        ],
        type: "bar",
        colors: {
          Direct: "#007bff",
          Indirect: "#28a745",
        },
      },
      bar: {
        width: {
          ratio: 0.5, // Adjust bar width
        },
      },
      axis: {
        x: {
          label: "Category",
          type: "category",
          categories: ["Direct", "Indirect"], // X-axis labels
        },
        y: {
          label: "Amount ($)",
        },
      },
    });

    // Create Area Spline Chart for "Real-Time Value"
    C3Chart.generate({
      bindto: "#area-spline-chart", // Changed ID
      data: {
        columns: [
          ["Real-Time", 50, 65, 75, 85, 95, 100], // Sample values
        ],
        type: "area-spline", // Changed to area spline chart
        colors: {
          "Real-Time": "#dc3545",
        },
      },
      axis: {
        x: {
          label: "Time",
          tick: {
            values: [1, 2, 3, 4, 5, 6], // Example time points
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
      {/* First Card: Bar Chart */}
      <div className="chart-card">
        <div className="chart-header">
          <h2>Direct Vs Indirect</h2>
          <h3>$245 Direct | $45 Indirect</h3>
        </div>
        <div id="bar-chart" className="chart-box"></div>
      </div>

      {/* Second Card: Area Spline Chart */}
      <div className="chart-card">
        <div className="chart-header">
          <h2>Real-Time Value</h2>
          <h3>$85</h3>
        </div>
        <div id="area-spline-chart" className="chart-box"></div> {/* Updated ID */}
      </div>
    </div>
  );
};

export default BarChart;
