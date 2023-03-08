import React from "react";
import "./Projects.css";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');
</style>;
function Projects() {
  return (
    <div>
      <div class="container">
        <div class="card-column column-0">
          <a href="https://github.com/MadhukeshSingh/CampusPlacementPrediction">
            <div class="card card-color-0">
              <div class="border"></div>
              <div class="tech">Machine learning</div>
              <h1>Placement-Predictor</h1>
            </div>
          </a>
          <div class="card card-color-2">
            <div class="border"></div>
            <div class="tech">
              <div class="tech">Natural language processing</div>
            </div>
            <h1>Auto Correct-Auto Complete</h1>
          </div>
        </div>
        <div class="card-column column-1">
          <div class="card card-color-1">
            <div class="border"></div>
            <img src="" alt="" />
            <div class="tech">Sequential models(LSTM)</div>
            <h1>Sythetic poets</h1>
          </div>
          <div class="card card-color-3">
            <div class="border"></div>
            <div class="tech">Computer Vision (Open CV)</div>
            <h1>rep counter</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
