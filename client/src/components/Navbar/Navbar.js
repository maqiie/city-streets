
// import React from "react";
// import "./Navbar.css";
// import { FaShoppingCart } from "react-icons/fa";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <p>
//           CITYSTREETS<br/>FOOTWARE
//         </p>
//       </div>
//       <ul className="nav-list">
//         <li>
//           <a href="#">Home</a>
//         </li>
//         <li>
//           <a href="#">About</a>
//         </li>
//         <li>
//           <a href="#">Services</a>
//         </li>
//         <li>
//           <a href="#">profile</a>
//         </li>
//       </ul>
//       <div className="cart-link">
//         <a href="#">
//           <FaShoppingCart className="cart-icon" />
//           <span className="badge">5</span>
//         </a>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import React from "react";
import "./Navbar.css";
import { FaShoppingCart, FaHome, FaInfoCircle, FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
  CITYSTREETS<br />
  <span>FOOTWARE</span>
</div>

      <ul className="nav-list">
        <li>
          <a href="#">
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
          <a href="#">
            <FaUser className="icon" /> Profile
          </a>
        </li>
      </ul>
      <div className="cart-link">
        <a href="#">
          <FaShoppingCart className="cart-icon" />
          <span className="badge">5</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
