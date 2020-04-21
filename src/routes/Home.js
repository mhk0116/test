import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div id="Home">
        <div id="Wraper">
          <nav id="nav" className="background">
            <div className="menu-home">
              <a class="home-btn" href="/">
                Home hi
              </a>
            </div>
          </nav>
          <header>
            <div className="title">
                <h1>DATA EUREKA</h1>
            </div>
            <div className="navigation">
              <h2>
                {/* data we used */}
                <a href="/data">DATA</a>
                <p>, </p>
                <a href="/trend">TREND</a>
                <p>, </p>
                <a href="/map">MAP</a>
                <p> OF SEOUL</p>
              </h2>
            </div>
            <div className="searchbar">
              <div className="control">
                <span className="icon-search"></span>
                <input
                  type="text"
                  className="control-input"
                  defaultValue=""
                  placeholder="Search data or keyword"
                />
                <a href="/search" class="control-button">
                  Search
                </a>
              </div>
            </div>
          </header>
          <section>
            <div>
              <h1>section</h1>
              <h4>sectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionv</h4>
            </div>
          </section>
          <footer>
            <div>
              <h1>footer</h1>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Home;
