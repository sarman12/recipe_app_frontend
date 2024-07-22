import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/Landing_page/Landing_page';
import Cuisine from './Components/Cuisine/Cuisine';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import { BsList } from 'react-icons/bs';
import { BiPhone } from 'react-icons/bi';
import { MdClose, MdEmail } from 'react-icons/md';
import { BsGithub } from 'react-icons/bs';
import { LiaLinkedin } from 'react-icons/lia';
import Seasonal from './Components/Seasonal/Seasonal';
import Login from './Components/Login/Login';
import Sign_up from './Components/Sign_up/Sign_up';
import Recipe from './Components/Recipe/Recipe';

function App() {
  const [visible, setVisible] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(false);

  const toggleMode = () => setToggle(!toggle);
  const toggleOverlay = () => setVisible(!visible);
  const togglenav = () => setActive(!active);

  return (
    <Router>
      <Navbar 
        toggle={toggle} 
        toggleMode={toggleMode} 
        visible={visible} 
        toggleOverlay={toggleOverlay}
      />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cuisine" element={<Cuisine />} />
        <Route path="/seasonal" element={<Seasonal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Sign_up />} />
          <Route path="/recipe" element={<Recipe />} />

      </Routes>
      
      <Footer />

      <div className={`Landing_page_information ${active ? 'Landing_page_information_show' : ''}`}>
        <div className="contact_form">
          <div>
            <BiPhone />
            <MdEmail />
            <BsGithub />
            <LiaLinkedin />
          </div>
          <div className="contact">
            <input type="text" placeholder="Enter your Name" />
            <input type="email" placeholder='Enter your email' />
            <textarea cols="30" rows="10" placeholder="Enter your queries"></textarea>
            <button>Send</button>
          </div>
        </div>
        <div className="navigation">
          <nav>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Privacy Policy</li>
              <li>Blog</li>
            </ul>
          </nav>
        </div>
        <MdClose className="special_menu" onClick={togglenav}/>
      </div>

      <BsList className="special_menu" onClick={togglenav}/>
    </Router>
  );
}

export default App;
