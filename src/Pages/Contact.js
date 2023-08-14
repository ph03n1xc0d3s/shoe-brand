import React from "react";
import Layout from "./Layout";
import Shoe from "../assets/images/hero-image.png";

const Contact = () => {
  return (
    <Layout>
      <div className="mainContainer">
        <div className="textContainer">
          <div className="text">
            <h2>Step into Support: Connecting Your Stride with Our Service</h2>
          </div>
        </div>
        <div className="imageContainer">
          <div className="image">
            <img src={Shoe} alt="nike-shoes" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
