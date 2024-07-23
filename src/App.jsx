import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/Landing_page/Landing_page';
import Cuisine from './Components/Cuisine/Cuisine';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Seasonal from './Components/Seasonal/Seasonal';
import Login from './Components/Login/Login';
import Sign_up from './Components/Sign_up/Sign_up';
import Recipe from './Components/Recipe/Recipe';
import Special from './Components/Special_menu/Special';

function App() {
  const [active, setActive] = useState(false);
  const togglenav = () => setActive(!active);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cuisine" element={<Cuisine />} />
        <Route path="/seasonal" element={<Seasonal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Sign_up />} />
        <Route path="/cuisine/:dish/recipe" element={<Recipe />} />
      </Routes>
      <Footer />
      <Special active={active} togglenav={togglenav} />
    </Router>
  );
}

export default App;
