import React from "react";
import Home from "./Pages/Home";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
