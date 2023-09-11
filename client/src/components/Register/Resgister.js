

import React, { useEffect, useState } from "react";
import { useHistory, useNavigate } from "react-router-dom"; // Import useNavigate


import axios from "axios";
import "./Register.css";

const Register = () => {
  const [loginLink, setLoginLink] = useState("");
  const [registerLink, setRegisterLink] = useState("");
  const [bearerToken, setBearerToken] = useState("");

  const navigate = useNavigate();


  useEffect(() => {
    // Define your backend API URL
    const backendUrl = "http://localhost:3001";

    // Define the API endpoints for login and register
    const loginEndpoint = "/auth/sign_in"; // Updated login endpoint
    const registerEndpoint = "/auth"; // Update this endpoint

    // Make an Axios GET request to fetch the login link
    axios
      .get(backendUrl + loginEndpoint)
      .then((response) => {
        // Assuming your backend responds with a JSON object containing the login link
        setLoginLink(response.data.loginLink);
      })
      .catch((error) => {
        console.error("Error fetching login link:", error);
      });

    // Make an Axios GET request to fetch the register link
    axios
      .post(backendUrl + registerEndpoint)
      .then((response) => {
        // Assuming your backend responds with a JSON object containing the register link
        setRegisterLink(response.data.registerLink);
      })
      .catch((error) => {
        console.error("Error fetching register link:", error);
      });
  }, []);
 
  const handleRegistration = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const passwordConfirmation = event.target.password_confirmation.value;

    try {
      // Make an Axios POST request to your registration endpoint with registration data
      const response = await axios.post("http://localhost:3001/auth", {
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
      });

      // Assuming your backend responds with a bearer token
      const token = response.headers.authorization; // Assuming the token is in the "authorization" header
      setBearerToken(token);
  
      // Store the token in local storage
      localStorage.setItem("authToken", token);
      
      // Log the token to the console
      console.log("Bearer Token (Registration):", token);
  
      // Now you can use the token for authenticated requests
    } catch (error) {
      console.error("Error registering:", error);
    }
  };
  
  // Function to handle login and store the bearer token
  // const handleLogin = async (event) => {
  //   event.preventDefault();
  //   const email = event.target.email.value;
  //   const password = event.target.password.value;
  
  //   try {
  //     // Make an Axios POST request to your login endpoint with email and password
  //     const response = await axios.post("http://localhost:3001/auth/sign_in", {
  //       email,
  //       password,
  //     });
  
  //     // Assuming your backend responds with a bearer token
  //     const token = response.headers.authorization; // Assuming the token is in the "authorization" header
  //     setBearerToken(token);
  
  //     // Store the token in local storage
  //     localStorage.setItem("authToken", token);
  
  //     // Set the "Authorization" header in Axios defaults for future requests
  //     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  
  //     // Log the token to the console
  //     console.log("Bearer Token (Login):", token);
  //     console.log("Login Response:", response);

  
  //     // Log a success message
  //     console.log("Login successful!");
  
  //     // Now you can use the token for authenticated requests
  //   } catch (error) {
  //     console.error("Error logging in:", error);
  //   }
  // };
  
  
  
      
  // const handleLogin = async (event) => {
  //   event.preventDefault();
  //   const email = event.target.email.value;
  //   const password = event.target.password.value;
  
  //   try {
  //     // Make an Axios POST request to your login endpoint with email and password
  //     const response = await axios.post("http://localhost:3001/auth/sign_in", {
  //       email,
  //       password,
  //     });
  
  //     // Log the entire response object to the console for debugging
  //     console.log("Login Response:", response);
  
  //     // Assuming your backend responds with a bearer token and user data
  //     const token = response.headers.authorization; // Assuming the token is in the "authorization" header
  //     setBearerToken(token);
  
  //     // Store the token in local storage
  //     localStorage.setItem("authToken", token);
  
  //     // Set the "Authorization" header in Axios defaults for future requests
  //     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  
  //     // Extract the user object from response.data
  //     const user = response.data.data; // Assuming user data is nested under the "data" key
  
  //     // Log the user data from the response
  //     console.log("User Data:", user);
  
  //     if (user.role === "admin" && user.admin === true) {
  //       // If the user is an admin, navigate to the admin dashboard
  //       console.log("User is an admin. Navigating to admin dashboard.");
  //       navigate('/admin');
  //     } else {
  //       // If the user is not an admin, handle the login success accordingly
  //       console.log("User is not an admin. Handling non-admin login logic.");
  //       console.log("Login successful!");
  //       // Handle non-admin user login logic here
  //     }
  //   } catch (error) {
  //     console.error("Error logging in:", error);
  //   }
  // };
  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
  
    try {
      // Make an Axios POST request to your login endpoint with email and password
      const response = await axios.post("http://localhost:3001/auth/sign_in", {
        email,
        password,
      });
  
      // Log the entire response object to the console for debugging
      console.log("Login Response:", response);
  
      // Assuming your backend responds with a bearer token and user data
      const token = response.headers.authorization; // Assuming the token is in the "authorization" header
      setBearerToken(token);
  
      // Store the token in local storage
      localStorage.setItem("authToken", token);
  
      // Set the "Authorization" header in Axios defaults for future requests
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  
      // Extract the user object from response.data
      const user = response.data.data; // Assuming user data is nested under the "data" key
  
      // Log the user data from the response
      console.log("User Data:", user);
  
      if (user.role === "admin" && user.admin === true) {
        // If the user is an admin, navigate to the admin dashboard
        console.log("User is an admin. Navigating to admin dashboard.");
        navigate('/admin');
      } else {
        // If the user is not an admin, navigate to the home page
        console.log("User is not an admin. Navigating to home page.");
        navigate('/');
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
  
  
  
  

  return (
    <div>
      <div className="wrapper">
        <div className="card-switch">
          <label className="switch">
            <input type="checkbox" className="toggle" />
            <span className="slider"></span>
            <span className="card-side"></span>
            <div className="flip-card__inner">
              <div className="flip-card__front">
                <div className="title">Log in</div>
                <form className="flip-card__form" onSubmit={handleLogin}>
                  <input
                    className="flip-card__input"
                    name="email"
                    placeholder="Email"
                    type="email"
                  />
                  <input
                    className="flip-card__input"
                    name="password"
                    placeholder="Password"
                    type="password"
                  />
                  <button className="flip-card__btn" type="submit">
                    Let's go!
                  </button>
                </form>
              </div>
              <div className="flip-card__back">
                <div className="title">Sign up</div>
                <form className="flip-card__form" onSubmit={handleRegistration}>
                  {/* <form className="flip-card__form" action=""> */}
                  <input
                    className="flip-card__input"
                    placeholder="Name"
                    type="text"
                  />
                  <input
                    className="flip-card__input"
                    name="email"
                    placeholder="Email"
                    type="email"
                  />
                  <input
                    className="flip-card__input"
                    name="password"
                    placeholder="Password"
                    type="password"
                  />
                  <input
                    className="flip-card__input"
                    name="password_confirmation"
                    placeholder="Password_confrimation"
                    type="password"
                  />

                  <button className="flip-card__btn">Confirm!</button>
                </form>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Register;
