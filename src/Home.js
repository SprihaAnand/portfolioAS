import React from "react";
import Footer from "./Footer";
import "./Home.css";
import Projects from "./Projects";

function Home() {
  return (
    <div class="parent">
      <div class="text box box2">
        hello I am
        <span class="name"> Aryan</span>, i do Machine learning
      </div>
      <div class="box">
        <Projects />
      </div>
    </div>
  );
}

export default Home;
