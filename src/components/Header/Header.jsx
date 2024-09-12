import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container" id="Header">
      <div className="back-img"></div>
      <div  className="heading-body">
        <div data-aos="fade-right" className="heading-container">
          <h3>'Hellow', I Am,</h3>
          <h1>EZAZ</h1>
          <h2>MAJUMDER</h2>
        </div>
        <div data-aos="fade-left" data-aos-duration="1000"  className="img-block">
          <div className="selfimg">
            <img src="/images/ezaz1.png" alt="my img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
