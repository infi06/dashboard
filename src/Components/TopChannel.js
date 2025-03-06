import React, { useEffect } from "react";
import C3Chart from "c3";
import "c3/c3.css";
import { FaGithub, FaFacebook, FaVimeo, FaLaptopCode } from "react-icons/fa";
import "../styles/topChannel.css";

const TopChannel = () => {
  useEffect(() => {

    C3Chart.generate({
      bindto: "#pie-chart",
      data: {
        columns: [
          ["US", 45],
          ["UK", 30],
          ["Canada", 25]
        ],
        type: "pie",
      },
    });
  }, []);

  return (
    <div className="top-channel-container">

      <div className="chart-card">
        <h2>Top Countries</h2>
        <div id="pie-chart" className="chart-box"></div>
      </div>


      <div className="table-card">
        <h2>Top Channel</h2>
        <table>
          <thead>
            <tr>
              <th>Source</th>
              <th>Visitors</th>
              <th>Revenue</th>
              <th>Sales</th>
              <th>Conversion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><FaGithub className="icon github" /> GitHub</td>
              <td>2.4k</td>
              <td>$3.84</td>
              <td>267</td>
              <td>28%</td>
            </tr>
            <tr>
              <td><FaFacebook className="icon facebook" /> Facebook</td>
              <td>3.2k</td>
              <td>$5.75</td>
              <td>312</td>
              <td>35%</td>
            </tr>
            <tr>
              <td><FaVimeo className="icon vimeo" /> Vimeo</td>
              <td>1.8k</td>
              <td>$2.90</td>
              <td>180</td>
              <td>22%</td>
            </tr>
            <tr>
              <td><FaLaptopCode className="icon india-hackers" /> India Hackers</td>
              <td>1.2k</td>
              <td>$1.45</td>
              <td>145</td>
              <td>18%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopChannel;
