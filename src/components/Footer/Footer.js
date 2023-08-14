import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerSectionOne">
        <span className="activeLink">FIND A STORE</span>
        <span className="activeLinkChild">BECOME A MEMBER</span>
        <span className="activeLinkChild">Send Us Feedback</span>
        <span className="activeLinkChild">STUDENTS DISCOUNT</span>
      </div>
      <div className="footerSectionTwo">
        <span className="activeLink">GET HELP</span>
        <span>Order Status</span>
        <span>Delivery</span>
        <span>Returns</span>
        <span>Payment Options</span>
      </div>
      <div className="footerSectionTwo">
        <span className="activeLink">About Nike</span>
        <span>News</span>
        <span>Careers</span>
        <span>Investors</span>
        <span>Sustainability</span>
      </div>
    </div>
  );
};

export default Footer;
