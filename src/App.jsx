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
import Add_to_cart from './Components/Add_to_cart/Add_to_cart';

function App() {
  const [active, setActive] = React.useState(false);
  const togglenav = () => setActive(!active);

  const [cart, setCart] = React.useState([]);

  const handleAddToCart = (dish) => {
    setCart([...cart, dish]);
  };

  const handleRemoveFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cuisine" element={<Cuisine handleAddToCart={handleAddToCart} />} />
        <Route path="/seasonal" element={<Seasonal handleAddToCart={handleAddToCart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Sign_up />} />
        <Route path="/vegan" element={<Vegan handleAddToCart={handleAddToCart} />} />
        <Route path="/seafood" element={<Seafood handleAddToCart={handleAddToCart} />} />
        <Route path="/non-vegetarian" element={<NonVegetarian handleAddToCart={handleAddToCart} />} />
        <Route path="/yourcart" element={<Add_to_cart cartItems={cart} handleRemoveFromCart={handleRemoveFromCart} />} />
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
