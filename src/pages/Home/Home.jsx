import React from "react";
import "./home.css";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Skill from "../../components/Skill/Skill";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Skill />
    </>
  );
};

export default Home;
