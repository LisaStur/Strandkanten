//import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import Contact from "./components/Contact";
import Menu from "./components/Menu";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<HomePage />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
      </Routes>
    </div>
  );
};

export default App;
