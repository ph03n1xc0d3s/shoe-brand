import React from "react";
import "../../assets/css/Navigation.css";
import logo from "../../assets/images/Nike-logo.png";

const Navigation = () => {
  return (
    <div className="mainContainer">
      <div className="logoContainer">
        <div className="logoImage">
          <img src={logo} alt="shoe" width="100px" />
        </div>
      </div>
      <div className="navContainer">
        <div className="navbar">
          <ul className="navList">
            <li className="navOptions">
              <a href="/" className="navHref">
                Home
              </a>
            </li>
            <li className="navOptions">
              <a href="/contact" className="navHref">
                Contact
              </a>
            </li>
            <li className="navOptions">
              <a href="/about" className="navHref">
                About
              </a>
            </li>
            <li className="navOptions">
              <a href="/career" className="navHref">
                Career
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="loginContainer">
        <div className="loginButton">
          <button className="loginBtn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
