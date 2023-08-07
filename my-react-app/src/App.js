// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Stylesheets/App.css';
import Navbar from './Components/Navbar';
import LandingPage from './Pages/LandingPage';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import RedirectPage from './Pages/RedirectPage';

function App() {
  

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage accessToken={accessToken}/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/redirect" element = {<RedirectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
