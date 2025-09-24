import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./hamburguer-menu.css";

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

const HamburguerMenu = () => {
  return (
    <div className="menu-btn">
      <div className="menu-btn__burger"></div>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <HamburguerMenu />
      <h1 className="app-name">Advanced Calculator</h1>
    </nav>
  );
};

export default App;
