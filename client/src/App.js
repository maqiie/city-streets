import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar /> {/* Include your Navbar component outside of the Route */}
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
      <br>
      </br>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
