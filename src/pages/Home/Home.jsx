import React from "react";
import "./home.css";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Experience from "../../components/Experience/Experience";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Experience />
    </>
  );
};

export default Home;
