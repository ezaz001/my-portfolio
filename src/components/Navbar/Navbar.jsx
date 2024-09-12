import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div
      data-aos="fade-down"
      data-aos-duration="1000"
      className="navbar-container"
    >
      <div className="nav-boxes">
        <ul>
          <li>
            <a
              href="#Header"
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById("Header");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Experience"
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById("Experience");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Experiences
            </a>
          </li>
          <li>
            <a href="http://">skills</a>
          </li>
          <li>
            <a href="http://">projects</a>
          </li>
          <li>
            <a href="http://">contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
