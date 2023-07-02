import React from "react";
import "./Footer.css";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="main">
        <div className="child">
          <h6></h6>
          <a href="/">
            <FaLinkedin /> Linkdin
          </a>
          <a href="/">
            <FaInstagram /> Instagram
          </a>
          <a href="/">
            <FaGithub /> Github
          </a>
          <a href="/">Gmail</a>
        </div>
      </div>
      <div>
        <div>
          <p className="copyright-text">
            Made with{" "}
            <span role="img" aria-label="heart">
              💜
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
