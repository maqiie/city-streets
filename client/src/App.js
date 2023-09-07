import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Men from './components/Men/Men'
// import Women from './components/'
import Register from "./components/Register/Resgister";


function App() {
  return (
    <Router>
      <Navbar /> {/* Include your Navbar component outside of the Route */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men/>} />
        <Route path="/register" element={<Register/>} />

      </Routes>
      <br>
      </br>
    
    </Router>
  );
}

export default App;
