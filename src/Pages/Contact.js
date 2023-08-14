import React from "react";
import Layout from "./Layout";
import Shoe from "../assets/images/hero-image.png";
import '../assets/css/Contact.css'

const Contact = () => {
  return (
    <Layout>
      <div className="mainContainer">
        <div className="textContainer">
          <div className="text">
            <h2 className="heading">Step into Support: Connecting Your Stride with Our Service</h2>
            <p className="tagline">At Nike, we value your feedback, inquiries, and suggestions. Our dedicated customer support team is here to assist you with any questions or concerns you might have. Please feel free to reach out to us through the following contact options</p>
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
