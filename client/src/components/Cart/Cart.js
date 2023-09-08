import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Cart.css";


  const Cart = ({ currentUser }) => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);



// useEffect(() => {
//   // Check if the user is authenticated
//   console.log("User:", currentUser);

//   if (currentUser && currentUser.cart) {
//     // Ensure currentUser and currentUser.cart are defined
//     const cartId = currentUser.cart.id; // You should obtain the cart ID dynamically
//     console.log("Cart ID:", cartId); // Log the cart ID

//     // Make a GET request to fetch the user's cart by ID
//     // axios.get(`http://localhost:3001/carts/${cartId}`).then((response) => {
//     //   setCartItems(response.data.cartItems);
//     //   setTotal(response.data.total);
//     // });
//     axios.get(`http://localhost:3001/carts/${cartId}`).then((response) => {
//   console.log("API Response:", response.data); // Log the entire response
//   setCartItems(response.data.cartItems);
//   setTotal(response.data.total);
// });

//   }
// }, [currentUser]);

useEffect(() => {
  // Check if the user is authenticated
  console.log("User:", currentUser);

  if (currentUser && currentUser.cart) {
    // Ensure currentUser and currentUser.cart are defined
    const cartId = currentUser.cart.id; // You should obtain the cart ID dynamically
    console.log("Cart ID:", cartId); // Log the cart ID

    // Make a GET request to fetch the user's cart by ID
    axios.get(`http://localhost:3001/carts/${cartId}`).then((response) => {
      console.log("API Response:", response.data); // Log the entire response
      setCartItems(response.data.cartItems);
      setTotal(response.data.total);
    });
  }
}, [currentUser]);

  
  

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ${item.price * item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total: ${total}</h3>
      </div>
    </div>
  );
};

export default Cart;
