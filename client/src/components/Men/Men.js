import React from "react";
import "./Men.css";
import { AiOutlineAntDesign } from "react-icons/ai"; // Example of using a different icon set (Ant Design)
import { SiNike, SiAdidas, SiPuma, SiNewbalance } from "react-icons/si";
import { FaShoePrints, FaUser,FaSignOutAlt } from "react-icons/fa";
import { GiConverseShoe, GiRunningShoe, GiShoebillStork } from "react-icons/gi";

const Men = () => {
  // Sample data for shoe cards (you can replace this with real data)
  const shoeData = [
    {
      id: 1,
      name: "Men Shoe 1",
      price: "$99.99",
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", // Replace with the actual image path
    },
    {
      id: 2,
      name: "Men Shoe 2",
      price: "$89.99",
      image:
        "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", // Replace with the actual image path
    },
    {
      id: 3,
      name: "Men Shoe 2",
      price: "$89.99",
      image:
        "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", // Replace with the actual image path
    },
    {
      id: 4,
      name: "Men Shoe 2",
      price: "$89.99",
      image:
        "https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", // Replace with the actual image path
    },
    {
      id: 5,
      name: "Men Shoe 2",
      price: "$89.99",
      image:
        "https://images.unsplash.com/photo-1603191659812-ee978eeeef76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", // Replace with the actual image path
    },
    {
      id: 6,
      name: "Men Shoe 2",
      price: "$89.99",
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", // Replace with the actual image path
    },
    // Add more shoe data as needed
  ];

  return (
   
    <div className="men-container">
      <div className="sidebar">
        {/* Sidebar content goes here */}
        <h2>Men's Shoes</h2>
        <ul>
          <li>
            <a href="/category/sports">
              <FaShoePrints /> Official Shoes
            </a>
          </li>
          <li>
            <a href="/category/casual">
              <SiNike /> Nike
            </a>
          </li>
          <li>
            <a href="/category/formal">
              <SiAdidas /> Addidas
            </a>
          </li>
          <li>
            <a href="/category/formal">
              <GiRunningShoe /> Etec
            </a>
          </li>
          <li>
            <a href="/category/formal">
              <SiNewbalance /> NewBalance
            </a>
          </li>
          <li>
            <a href="/category/formal">
              <SiPuma /> Puma
            </a>
          </li>
          <li>
            <a href="/category/formal">
              <GiConverseShoe /> Converse
            </a>
          </li>
          <li>
            <a href="/category/formal">
              <GiRunningShoe /> Under Armour
            </a>
          </li>
          <li>
            <a href="/category/formal">
              <GiShoebillStork /> Vans
            </a>
          </li>
          <li>
            <a href="/category/formal">
              <FaShoePrints /> Others
            </a>
          </li>
        </ul>

        <div className="bottom-links">
          <a href="/profile">
            <FaUser /> Profile
          </a>
          <a href="/logout">
            <FaSignOutAlt /> Logout
          </a>
        </div>
      </div>

      <div className="shoe-cards">
        {/* Shoe cards go here */}
        {shoeData.map((shoe) => (
          <div className="shoe-card" key={shoe.id}>
            <img src={shoe.image} alt={shoe.name} />
            <h3>{shoe.name}</h3>
            <p>Price: {shoe.price}</p>
            <button class="CartBtn">
              <span class="IconContainer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                  fill="rgb(17, 17, 17)"
                  class="cart"
                >
                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                </svg>
              </span>
              <p class="text">Add to Cart</p>
            </button>
            {/* Add more shoe details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Men;
