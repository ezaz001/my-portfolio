import React, { useEffect, useState } from "react";
import "./home.css";
import Header from "../../components/Header/Header";

const Home = () => {
  let [images, setNewImages] = useState([]);
  useEffect(() => {
    fetch("/backgroundimg.json")
      .then((response) => response.json())
      .then((jsonData) => setNewImages(jsonData))
      .catch((error) =>
        console.log("Error while fetching the json datar", console.error)
      );
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="background">
          {images.map((image, i) => (
            <img src={image.image} alt="" />
          ))}
        </div>
      </div>
      <Header />
    </>
  );
};

export default Home;
