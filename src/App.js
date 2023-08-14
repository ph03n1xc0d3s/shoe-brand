import React from "react";
import Home from "./Pages/Home";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Career from "./Pages/Career";

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About />}/>
      <Route path="/career" element={<Career />}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
