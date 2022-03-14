import React from "react";
// import './App.css'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import AllProduct from "./Components/AllProduct/AllProduct";
import Account from "./Components/Account/Account";
import Home from "./Home/Home";
import Navbar from "./Components/Nav/Navbar";
import Banner from "./Components/Header/Banner";
import AddToCart from "./Components/AddToCart/AddToCart";

function App() {
  return (
    <>
    
  <Router>
  <Navbar/>
    <Routes>
      <Route path="/" element = {<Banner/>} />
    </Routes>
    <Routes>
      <Route path="/account" element = {<Account/>} />
    </Routes>
    <Routes>
      <Route path="/allproducts" element = {<AllProduct/>} />
    </Routes>
    <Routes>
      <Route path="/addtocart" element = {<AddToCart/>} />
    </Routes>
    <Routes>
      <Route path="/home" element = {<Home/>} />
    </Routes>
  </Router>
 
    
    </>
  );
}

export default App;
