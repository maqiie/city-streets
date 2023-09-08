// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Home from "./components/Home/Home";
// import Navbar from "./components/Navbar/Navbar";
// import Men from './components/Men/Men'
// import Women from './components/Women/Women'
// import Register from "./components/Register/Resgister";
// import Cart from "./components/Cart/Cart";

// function App() {
//   const storedToken = localStorage.getItem("authToken"); // Retrieve Bearer token from local storage
// const isLoggedIn=!!storedToken;
// console.log(isLoggedIn)

//   return (
//     <Router>
//       <Navbar /> {/* Include your Navbar component outside of the Route */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/men" element={<Men/>} />
//         <Route path="/women" element={<Women/>} />
//         <Route path="/register" element={<Register/>} />
//         <Route path="/cart" element={<Cart/>} />

//       </Routes>
//       <br>
//       </br>

//     </Router>
//   );
// }

// export default App;
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Men from "./components/Men/Men";
import Women from "./components/Women/Women";
import Register from "./components/Register/Resgister";
import Cart from "./components/Cart/Cart";
import axios from "axios"; // Import Axios

function App() {
  const storedToken = localStorage.getItem("authToken");
  const isLoggedIn = !!storedToken;
  const [currentUser, setCurrentUser] = useState(null); // State for storing user data

  useEffect(() => {
    axios.interceptors.request.use((config) => {
      const authToken = localStorage.getItem("authToken"); // Retrieve the user's token from localStorage
      if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
      }
      return config;
    });
    

    // Function to fetch user data
    const fetchUserData = async () => {
      try {
        // Make a GET request to validate the user's token and fetch user data
        const response = await axios.get(
          "http://localhost:3001/auth/validate_token"
        ); // Use your backend URL
        const userData = response.data.data; // Assuming your user data is nested under "data"
        setCurrentUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    // Check if the user is logged in
    if (isLoggedIn) {
      fetchUserData(); // Fetch user data if logged in
    }
  }, [isLoggedIn]); // Trigger the effect when the login status changes

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart currentUser={currentUser} />} />

        {/* Pass currentUser as a prop */}
      </Routes>
      <br />
    </Router>
  );
}

export default App;
