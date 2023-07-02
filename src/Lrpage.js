import React from "react";
import "./Lrpage.css";

function Lrpage() {
  return (
    <div className="lrpage-container">
      <div className="lrpage-left">
        <h2>Welcome Back!</h2>
      </div>
      <div className="lrpage-right">
        <a href="#/loginform">
          <button className="register-button">Login</button>
        </a>
        <a href="#/registerform">
          <button className="login-button">Register</button>
        </a>
      </div>
    </div>
  );
}

export default Lrpage;
