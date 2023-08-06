// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import RedirectPage from './Components/RedirectPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/redirect" element = {<RedirectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
