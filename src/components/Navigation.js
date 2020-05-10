import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

class Navigation extends Component {
  // 스크롤 움직이면 현재 pageYOffset 값과 이전 pageYOffset 값 비교
  // 이전 값이 더 크면 ( 스크롤을 올리면 ) 네비게이션 바 나타남.
  // x축은 우로 갈수록, y축은 아래로 갈수록 크다.
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
