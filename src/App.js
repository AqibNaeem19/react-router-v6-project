import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import Admin from "./Pages/Admin";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Products from "./Pages/Products";
import UserDetails from "./Pages/UserDetails";
import NewProducts from "./Pages/NewProducts";
import OrderSummary from "./Pages/OrderSummary";
import FeaturedProducts from "./Pages/FeaturedProducts";
import ErrorPage from "./Pages/ErrorPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        {/* Nested Routes */}
        <Route path="/products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
