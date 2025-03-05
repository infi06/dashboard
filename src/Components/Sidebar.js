import React from "react";
import "../styles/sidebar.css";

const Sidebar = ({ children }) => {
  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Sidebar</h2>
        <ul>
          <li>Dashboard</li>
          <li>Reports</li>
          <li>Settings</li>
        </ul>
      </aside>

      {/* Main Dashboard Content */}
      <main className="dashboard">{children}</main>
    </div>
  );
};

export default Sidebar;
