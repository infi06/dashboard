import React, { useEffect } from "react";
import C3Chart from "c3";
import "../styles/lineChart.css";

const LineChart = () => {
  useEffect(() => {

    C3Chart.generate({
      bindto: "#line-chart-1",
      data: {
        columns: [
          ['Sales', 1300, 1500, 2000, 2500, 3000, 3500, 4000],
          ['Expenses', 900, 1200, 1500, 1800, 2200, 2700, 3000],
        ],
        types: {
          Sales: 'spline',
          Expenses: 'spline',
        },
        colors: {
          Sales: '#007bff',
          Expenses: '#ff5733',
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


    C3Chart.generate({
      bindto: "#line-chart-2",
      data: {
        columns: [
          ['Sales', 1500, 1700, 2100, 2600, 3100, 3600, 4200],
          ['Refunds', 200, 250, 300, 350, 400, 450, 500],
        ],
        types: {
          Sales: 'spline',
          Refunds: 'spline',
        },
        colors: {
          Sales: '#28a745',
          Refunds: '#dc3545',
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


    C3Chart.generate({
      bindto: "#line-chart-3",
      data: {
        columns: [
          ['Sales', 1000, 1400, 1800, 2300, 2800, 3200, 3800],
          ['Profit', 500, 600, 700, 850, 1000, 1200, 1400],
        ],
        types: {
          Sales: 'spline',
          Profit: 'spline',
        },
        colors: {
          Sales: '#ffc107',
          Profit: '#17a2b8',
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

      <div className="card">
        <div className="card-content">
          <div className="left-side">
            <h2>Acme Plus</h2>
            <h3>SALES</h3>
            <h1>
  $52,15 <sup className="percentage-badge">+45%</sup>
</h1>
          </div>
          <div className="right-side">
            <span>...</span>
          </div>
        </div>
        <div id="line-chart-1" className="chart-container"></div>
      </div>


      <div className="card">
        <div className="card-content">
          <div className="left-side">
            <h2>Acme Advanced</h2>
            <h3>SALES</h3>
            <h1>
  $10,15 <sup className="percentage-badge-red">-15%</sup>
</h1>
          </div>
          <div className="right-side">
            <span>...</span>
          </div>
        </div>
        <div id="line-chart-2" className="chart-container"></div>
      </div>

      <div className="card">
        <div className="card-content">
          <div className="left-side">
            <h2>Acme Professional</h2>
            <h3>SALES</h3>
            <h1>
  $72,15 <sup className="percentage-badge">+55%</sup>
</h1>
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
