import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home.tsx";
import BodyMassIndex from "./components/BMI.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BMI from './components/BMI.tsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bmi" element={<BMI />} />
      </Routes>
    </Router>
  );
}

export default App;
