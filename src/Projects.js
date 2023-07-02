import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="container">
      <div className="card-column">
        <a className="card-link" href="#">
          <div className="card card-color-0">
            <div className="border"></div>
            <div className="tech">
              Save time and effort by leveraging our AI-powered candidate
              screening technology. Identify top talents with precision and
              speed.
            </div>
            <h1>Automated Candidate Screening</h1>
          </div>
        </a>
        <a className="card-link" href="#">
          <div className="card card-color-2">
            <div className="border"></div>
            <div className="tech">
              Our platform enables seamless collaboration between hiring
              managers and HR professionals, ensuring a streamlined and
              efficient hiring process.
            </div>
            <h1>Collaborative Hiring Process</h1>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Projects;
