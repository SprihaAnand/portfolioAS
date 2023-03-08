import React from "react";
import "./Domains.css";
function Domains() {
  return (
    <div>
      <div class="wrapper">
        <h1>Domains</h1>
        <div class="cols">
          <div class="col" ontouchstart="this.classList.toggle('hover');">
            <div class="container">
              <div class="front front1">
                <div class="inner">
                  <p>Machine learning</p>
                </div>
              </div>
              <div class="back">
                <div class="inner">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Alias cum repellat velit quae suscipit c.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col" ontouchstart="this.classList.toggle('hover');">
            <div class="container">
              <div class="front front2">
                <div class="inner">
                  <p>Deep learning</p>
                </div>
              </div>
              <div class="back">
                <div class="inner">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Alias cum repellat velit quae suscipit c.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col" ontouchstart="this.classList.toggle('hover');">
            <div class="container">
              <div class="front front2">
                <div class="inner">
                  <p>Sequential Model learning</p>
                </div>
              </div>
              <div class="back">
                <div class="inner">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Alias cum repellat velit quae suscipit c.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Domains;
