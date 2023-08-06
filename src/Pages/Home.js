import React from "react";
import Layout from "./Layout";
import landingimage from "../assets/images/hero-image.png";
import amazon from "../assets/images/amazon.png";
import flipkart from "../assets/images/flipkart.png";
import "../assets/css/Home.css";

const Home = () => {
  const handleAmazon = () => {
    window.location.href = "https://shorturl.at/ftOS4";
  };
  const handleFlipkart = () => {
    window.location.href = "https://shorturl.at/knBM9";
  };
  return (
    <Layout>
      <div className="container">
        <div className="landingContainer">
          <div className="landingContent">
            <h1>Your feet deserve the best</h1>
            <p>
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
              SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
              OUR SHOES.
            </p>
            <div className="clickButtons">
              <button className="shopNowBtn">Shop Now</button>
              <button className="categoryBtn">Category</button>
            </div>
            <span className="alsoAvailable">Also available on</span>
            <div className="storeImages">
              <img
                src={flipkart}
                alt="amazon"
                width="32px"
                height="32px"
                onClick={handleFlipkart}
              />
              <img
                src={amazon}
                alt="flipkart"
                width="32px"
                height="30px"
                onClick={handleAmazon}
              />
            </div>
          </div>
          <div className="landingImage">
            <div className="imageContainer">
              <img src={landingimage} alt="shoe" className="heroImage" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
