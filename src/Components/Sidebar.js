import React from "react";
import logo from '../logo.svg';
import { FaHome, FaShoppingCart, FaCaretDown } from "react-icons/fa"; // Import required icons
import "../styles/sidebar.css";

const Sidebar = ({ children }) => {
  return (
    <div className="container">

      <aside className="sidebar">

        <div className="logo">
          <img src={logo} alt="Logo" className="sidebar-logo" />
        </div>
        <h2 style={{"color":"white"}}>Pages</h2>
        <ul>
          <li>
            <FaHome />
            Dashboard <FaCaretDown />
          </li>
          <li>
            <FaShoppingCart />
            Ecommerce <FaCaretDown />
          </li>
        </ul>
      </aside>


      <main className="dashboard">{children}</main>
    </div>
  );
};

export default Sidebar;
