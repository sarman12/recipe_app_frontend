import React from 'react';
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
import Vegan from './Components/Vegan/Vegan';
import Seafood from './Components/Seafood/Seafood';
import NonVegetarian from './Components/Non_vegeterian/Non_vegeterian';
// import Addtocart from './Components/Add_to_cart/Add_to_cart';

function App() {
  const [active, setActive] = React.useState(false);
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
        <Route path="/vegan" element={<Vegan />} />
        <Route path="/seafood" element={<Seafood />} />
        <Route path="/non-vegetarian" element={<NonVegetarian />} />
        {/* <Route path="/yourcart" element={<Addtocart />} /> */}
        <Route path="/non-vegetarian/:dish/recipe" element={<Recipe />} />
        <Route path="/cuisine/:dish/recipe" element={<Recipe />} />
        <Route path="/seasonal/:dish/recipe" element={<Recipe />} />
        <Route path="/seafood/:dish/recipe" element={<Recipe />} />
        <Route path="/vegan/:dish/recipe" element={<Recipe />} />
      </Routes>
      <Footer />
      <Special active={active} togglenav={togglenav} />
    </Router>
  );
}

export default App;
