import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import ErrorPage from "./Pages/ErrorPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/about' element={ < About />} />
        <Route path='/profile' element={ <Profile />} />
        <Route path='*' element={ <ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
