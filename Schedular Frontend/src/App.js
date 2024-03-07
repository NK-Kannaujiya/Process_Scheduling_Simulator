import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Navbar/Nav.js";
import SimulatorNitesh from "./components/Simulator/SimulatorNitesh.js";
import Home from "./components/Home/Home.js";
import Footer from "./components/Footer/Footer.js";
import Docs from "./components/Docs/Docs.js";
import About from "./components/About/About.js";

export default function App() {
  return (
    <div>
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Simulator" element={<SimulatorNitesh />} />
          <Route path="/Docs" element={<Docs />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
