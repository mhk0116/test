import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

class Navigation extends Component {
  scrollEvent = () => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav").style.top = "0";
      } else {
        document.getElementById("nav").style.top = "-50px";
      }
      prevScrollpos = currentScrollPos;
    };
  };

  componentDidMount() {
    this.scrollEvent();
  }

  render() {
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
}

export default Navigation;
