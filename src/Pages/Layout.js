import React from "react";
import Navigation from "../components/Navigation/Navigation";
import "../assets/css/Layout.css";
import Footer from "../components/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
