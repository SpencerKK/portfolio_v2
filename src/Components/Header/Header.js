import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-background">
      <div className="header-wrapper">
        <div className="header-left">
          <h1>Spencer Kenealy</h1>
          <p>Frontend Developer In Los Angeles</p>
        </div>
        <div className="header-right">
          <i className="fab fa-github"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
