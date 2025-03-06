import React, { useEffect, useRef } from "react";
import c3 from "c3";
import "c3/c3.css";
import "../styles/salesChart.css";

const SalesChart = () => {
  const lineChartRef = useRef(null);
  const barChartRef = useRef(null);

  useEffect(() => {
    if (lineChartRef.current) {
      c3.generate({
        bindto: lineChartRef.current,
        data: {
          columns: [["Sales", 150, 200, 250, 300, 350, 400, 450]],
          type: "line",
          colors: { Sales: "#007bff" },
        },
        axis: {
          x: {
            type: "category",
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            label: "Month",
          },
          y: { label: "Price ($)" },
        },
      });
    }

    if (barChartRef.current) {
      c3.generate({
        bindto: barChartRef.current,
        data: {
          columns: [
            ["Refunds", 20, 30, 15, 25, 40, 35, 50],
            ["Sales", 50, 70, 65, 85, 90, 110, 125],
          ],
          type: "bar",
          colors: { Refunds: "#dc3545", Sales: "#28a745" },
          groups: [["Sales", "Refunds"]],
        },
        axis: {
          x: {
            type: "category",
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            label: "Month",
          },
          y: { label: "Amount ($)" },
        },
      });
    }
  }, []);

  return (
    <div className="sales-container">

      <div className="chart-card">
        <h2>Sales Over Time (Stores)</h2>
        <div className="sales-info">
        <h1>
  $32,15 <sup className="percentage-badge">-35%</sup>
</h1>
        <div>
        <span className="circle blue-circle"></span>Current
        <span className="circle violet-circle"></span>  Previous
        </div>

        </div>
        <div ref={lineChartRef} className="chart-container"></div>
      </div>


      <div className="chart-card">
        <h2>Sales vs Refund</h2>
        <h1>
  $22,12 <sup className="percentage-badge">-22%</sup>
</h1>
        <div ref={barChartRef} className="chart-container"></div>
      </div>
    </div>
  );
};

export default SalesChart;
