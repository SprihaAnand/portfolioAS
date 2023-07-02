import React from "react";
import Footer from "./Footer";
import "./Home.css";
import Projects from "./Projects";

function Home() {
  return (
    <div className="parent">
      <div className="text box box2">
        Efficient
        <span className="name"> Recruitment</span>Solution
      </div>
      <div className="subtext">
        Streamline your hiring process with our advanced online platform
      </div>
      <div className="box"></div>
      <a href="#/features">
        <button className="discover-btn">Discover More</button>
      </a>
    </div>
  );
}

export default Home;
