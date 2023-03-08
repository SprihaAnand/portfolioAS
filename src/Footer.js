import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div>
        <div class="main">
          <div class="child">
            <h6>About Me</h6>
            <p class="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div class="child">
            <h6>Contact Me</h6>

            <a href="/">Linkdin</a>

            <a href="/">instagram</a>

            <a href="/">github</a>

            <a href="/">Gmail</a>
          </div>
        </div>
      </div>
      <div>
        <div>
          <p class="copyright-text">Made with 💜</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
