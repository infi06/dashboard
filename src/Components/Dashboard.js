import React from "react";
import { FaSearch, FaEnvelope, FaPowerOff, FaRegStickyNote, FaArrowRight } from "react-icons/fa";
import Sidebar from "./Sidebar";
import "../styles/sidebar.css";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import TopChannel from "./TopChannel";
import SalesChart from "./SalesChart";

const Dashboard = () => {
  return (
    <Sidebar>
      <div className="dashboard-content">

        <div className="right-icons">
          <FaSearch className="icon" title="Search" />
          <FaEnvelope className="icon" title="Messages" />
          <FaPowerOff className="icon" title="Logout" />
          <FaRegStickyNote className="icon" title="Disclaimer" />
          <FaArrowRight className="icon" title="Next" />
        </div>


        <div className="dashboard-flex-container">

          <div className="left-section">
            <h1>Dashboard infi</h1>
          </div>


          <div className="right-section">
            <input type="date" id="calendar" className="calendar-input" />
            <input type="button" value="Add View" className="add-value-button" />
          </div>
        </div>
      </div>
      <LineChart/>
      <BarChart/>
      <TopChannel/>
      <SalesChart/>
    </Sidebar>
  );
};

export default Dashboard;
