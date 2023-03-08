import React from "react";
import "./Home.css";

function Home() {
  return (
    <div class="parent">
      <div>
        <img src={require("./bitmoji.png")} alt="" />
      </div>
      <div class="box box2">
        <div class="text">
          <span class="name">Aryan</span> i do Machine learning
        </div>
      </div>
    </div>
  );
}

export default Home;
