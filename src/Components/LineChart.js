import React, { useEffect } from "react";
import C3Chart from "c3";
import "../styles/lineChart.css";

const LineChart = () => {
  useEffect(() => {
    // Create the spline chart for the first card (Compare Sales vs Expenses)
    C3Chart.generate({
      bindto: "#line-chart-1", // Unique ID for the first chart
      data: {
        columns: [
          ['Sales', 1300, 1500, 2000, 2500, 3000, 3500, 4000], // Sales data
          ['Expenses', 900, 1200, 1500, 1800, 2200, 2700, 3000], // Expenses data
        ],
        types: {
          Sales: 'spline', // Smooth line for Sales
          Expenses: 'spline', // Smooth line for Expenses
        },
        colors: {
          Sales: '#007bff', // Line color for Sales
          Expenses: '#ff5733', // Line color for Expenses
        },
      },
      axis: {
        x: {
          label: 'Month',
          tick: {
            values: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
          }
        },
        y: {
          label: 'Amount ($)',
        }
      }
    });

    // Create the spline chart for the second card (Compare Sales vs Refunds)
    C3Chart.generate({
      bindto: "#line-chart-2", // Unique ID for the second chart
      data: {
        columns: [
          ['Sales', 1500, 1700, 2100, 2600, 3100, 3600, 4200], // Sales data
          ['Refunds', 200, 250, 300, 350, 400, 450, 500], // Refunds data
        ],
        types: {
          Sales: 'spline', // Smooth line for Sales
          Refunds: 'spline', // Smooth line for Refunds
        },
        colors: {
          Sales: '#28a745', // Line color for Sales
          Refunds: '#dc3545', // Line color for Refunds
        },
      },
      axis: {
        x: {
          label: 'Month',
          tick: {
            values: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
          }
        },
        y: {
          label: 'Amount ($)',
        }
      }
    });

    // Create the spline chart for the third card (Compare Sales vs Profit)
    C3Chart.generate({
      bindto: "#line-chart-3", // Unique ID for the third chart
      data: {
        columns: [
          ['Sales', 1000, 1400, 1800, 2300, 2800, 3200, 3800], // Sales data
          ['Profit', 500, 600, 700, 850, 1000, 1200, 1400], // Profit data
        ],
        types: {
          Sales: 'spline', // Smooth line for Sales
          Profit: 'spline', // Smooth line for Profit
        },
        colors: {
          Sales: '#ffc107', // Line color for Sales
          Profit: '#17a2b8', // Line color for Profit
        },
      },
      axis: {
        x: {
          label: 'Month',
          tick: {
            values: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
          }
        },
        y: {
          label: 'Amount ($)',
        }
      }
    });
  }, []);

  return (
    <div className="card-container">
      {/* Card 1: Sales vs Expenses */}
      <div className="card">
        <div className="card-content">
          <div className="left-side">
            <h1>Acme Plus</h1>
            <h2>SALES vs EXPENSES</h2>
            <h1><strong>$2415</strong></h1>
          </div>
          <div className="right-side">
            <span>...</span>
          </div>
        </div>
        <div id="line-chart-1" className="chart-container"></div>
      </div>

      {/* Card 2: Sales vs Refunds */}
      <div className="card">
        <div className="card-content">
          <div className="left-side">
            <h1>Acme Advanced</h1>
            <h2>SALES vs REFUNDS</h2>
            <h1><strong>$3200</strong></h1>
          </div>
          <div className="right-side">
            <span>...</span>
          </div>
        </div>
        <div id="line-chart-2" className="chart-container"></div>
      </div>

      {/* Card 3: Sales vs Profit */}
      <div className="card">
        <div className="card-content">
          <div className="left-side">
            <h1>Acme Professional</h1>
            <h2>SALES vs PROFIT</h2>
            <h1><strong>$5000</strong></h1>
          </div>
          <div className="right-side">
            <span>...</span>
          </div>
        </div>
        <div id="line-chart-3" className="chart-container"></div>
      </div>
    </div>
  );
};

export default LineChart;
