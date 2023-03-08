import React from "react";
import "./Projects.css";
function Projects() {
  return (
    <div>
      <div class="container">
        <div class="card-column column-0">
          <div class="card card-color-0">
            <div class="border"></div>
            <img src="" alt="" />
            <h1>Hey now, you're an allstar</h1>
          </div>
          <div class="card card-color-2">
            <div class="border"></div>
            <img src="" alt="" />
            <h1>Hey now, you're a rock star</h1>
          </div>
        </div>
        <div class="card-column column-1">
          <div class="card card-color-1">
            <div class="border"></div>
            <img src="" alt="" />
            <h1>Get your game on, go play</h1>
          </div>
          <div class="card card-color-3">
            <div class="border"></div>
            <img src="" alt="" />
            <h1>Get the show on, get paid</h1>
          </div>
        </div>
      </div>

      <div id="cover" class="cover"></div>

      <div id="open-content" class="open-content">
        <a href="#" id="close-content" class="close-content">
          <span class="x-1"></span>
          <span class="x-2"></span>
        </a>
        <img id="open-content-image" src="" />
        <div class="text" id="open-content-text"></div>
      </div>
    </div>
  );
}

export default Projects;
