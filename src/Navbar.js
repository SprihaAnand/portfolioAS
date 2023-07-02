import React from "react";
import "./Navbar.css";
import logo from "../src/Resources/logo .png";
function Navbar() {
  const design = (
    <header>
      <div class="container">
        <a href="/" class="logo">
          <img className="logo" src={logo} />
        </a>
        <nav class="nav">
          <div class="close-icon">
            <i class="fa-solid fa-xmark"></i>
          </div>
          <a href="#/home" class="active">
            Home
          </a>
          <a href="#/search">Search</a>
          <a href="#/login">Login</a>
        </nav>
        <div class="bar-icon">
          <i class="fa-solid fa-bars"></i>
        </div>
        <div class="overlay"></div>
      </div>
    </header>
  );
  return design;
}

export default Navbar;
