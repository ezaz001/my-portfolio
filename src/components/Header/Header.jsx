import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container" id="Header">
      <div className="back-img"></div>
      <div className="heading-body">
        <div data-aos="fade-right" className="heading-container">
          <h3>Hi, I'm,</h3>
          <h1>EZAZ MAJUMDER</h1>
          <h2>-Front-End Developer</h2>
          <p>
            I specialize in building interactive, user-friendly, and responsive
            web applications. With a strong foundation in HTML, CSS, and
            JavaScript, along with expertise in modern frameworks like React.js,
            I turn creative ideas into functional digital experiences.
          </p>
          <a href="/cv.pdf" download="Ezaz-cv.pdf">
            <button className="download-btn-cv">Download CV</button>
          </a>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="img-block"
        >
          <div className="selfimg">
            <img src="/images/ezaz1.png" alt="my img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
