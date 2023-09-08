import React from "react";
import "./Navbar.css";
import { FaShoppingCart, FaHome, FaInfoCircle, FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo" >
        <a className="logo"  href="/">
        CITYSTREETS
        <br />
        <span>FOOTWARE</span>
        </a>
        
      </div>

      <ul className="nav-list">
        <li>
          <a href="/">
            <FaHome className="icon" /> Home
          </a>
        </li>
        <li>
          <a href="#">
            <FaInfoCircle className="icon" /> About
          </a>
        </li>
        <li>
          <a href="#">
            <FaInfoCircle className="icon" /> Services
          </a>
        </li>
        <li>
          <a href="/register">
            <FaUser className="icon" /> Profile
          </a>
        </li>
      </ul>
      <div className="cart-link">
        <a href="/cart">
          <FaShoppingCart className="cart-icon" />
          <span className="badge">5</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
