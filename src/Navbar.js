import React from "react";
import "./Navbar.css";

function Navbar() {
  const design = (
    <header>
      <div class="container">
        <a href="/" class="logo">
          AS
        </a>
        <nav class="nav">
          <div class="close-icon">
            <i class="fa-solid fa-xmark"></i>
          </div>
          <a href="/" class="active">
            Projects
          </a>
          <a href="/">about</a>
          <a href="/">contact</a>
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
