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
        bindto: lineChartRef.current, // Use ref instead of ID
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
        bindto: barChartRef.current, // Use ref instead of ID
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
      {/* First Card: Sales Over Time */}
      <div className="chart-card">
        <h1>Sales Over Time (Stores)</h1>
        <div className="sales-info">
          <h1>$514</h1>
          <h3>Current vs Previous</h3>
        </div>
        <div ref={lineChartRef} className="chart-container"></div>
      </div>

      {/* Second Card: Sales vs Refunds */}
      <div className="chart-card">
        <h1>Sales vs Refund</h1>
        <h1>$65</h1>
        <div ref={barChartRef} className="chart-container"></div>
      </div>
    </div>
  );
};

export default SalesChart;
