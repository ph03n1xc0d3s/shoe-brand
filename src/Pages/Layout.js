import React from "react";
import Navigation from "../components/Navigation/Navigation";
import "../assets/css/Layout.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
