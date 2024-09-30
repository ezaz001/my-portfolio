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
              Home
            </a>
          </li>
          <li>
            <a
              href="#Skill"
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById("Skill");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Skills
            </a>
          </li>
          <li>
            <a href="http://">projects</a>
          </li>
          <li>
            <a href="http://">About</a>
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
