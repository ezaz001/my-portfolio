import React from "react";
import "./skill.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Skill = () => {
  return (
    <div className="skill-container" id="Skill">
      <div data-aos="fade-up" className="right-container">
        <h3 className="skill-text">Skills</h3>
        <ul className="skills">
          <li className="skill">
            <img src="/images/htmlicon.png" alt="" className="logo" />
            <h3 className="logo-name">Html</h3>
          </li>
          <li className="skill">
            <img src="/images/cssicon.png" alt="" className="logo" />
            <h3 className="logo-name">CSS</h3>
          </li>
          <li className="skill">
            <img src="/images/jsicon.png" alt="" className="logo" />
            <h3 className="logo-name">JS</h3>
          </li>
          <li className="skill">
            <img src="/images/reacticon.png" alt="" className="logo" />
            <h3 className="logo-name">React JS</h3>
          </li>
          <li className="skill">
            <img src="/images/nodeicon.png" alt="" className="logo" />
            <h3 className="logo-name">Node Js</h3>
          </li>
          <li className="skill">
            <img src="/images/mongoicon.png" alt="" className="logo" />
            <h3 className="logo-name">MongoDB</h3>
          </li>
          <li className="skill">
            <img src="/images/tailwindicon.png" alt="" className="logo" />
            <h3 className="logo-name">Tailwind CSS</h3>
          </li>
        </ul>
      </div>
      <div data-aos="fade-up" className="left-container">
        <h3>Certificates</h3>
        <div className="certificates">
          <Zoom>
            <img
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              src="/images/certificate1.jpg"
              alt=""
            />
          </Zoom>
          <Zoom>
            <img
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              src="/images/certificate2.jpg"
              alt=""
            />
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Skill;
