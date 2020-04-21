import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div id="Home">
        <div id="Wraper">
          <header>
            <div className="title">
              <h1>DATA EUREKA</h1>
            </div>
            <div className="menu">
              <h2>
                {/* data we used */}
                <Link className="quick" to="/data">DATA</Link>
                <p>, </p>
                <Link className="quick" to="/trend">TREND</Link>
                <p>, </p>
                <Link className="quick" to="/map">MAP</Link>
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
                <a href="/search" className="control-button">
                  Search
                </a>
              </div>
            </div>
          </header>
          <section>
            <div>
              <h1>section</h1>
              <h4>
                sectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionsectionv
              </h4>
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
