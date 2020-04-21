import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav id="nav" className="background">
      <div className="navigation">
        <Link className="home-btn" to="/">
          Home
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
