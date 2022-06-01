import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import OrderSummary from "./Pages/OrderSummary";
import ErrorPage from "./Pages/ErrorPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <nav className='nav-links'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/profile'>Profile</NavLink>
    </nav>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/about' element={ < About />} />
        <Route path='/profile' element={ <Profile />} />
        <Route path='/order-summary' element={ <OrderSummary />} />
        <Route path='*' element={ <ErrorPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
