import React, { Component } from "react";
import axios from "axios";
import "./Data.css";

class Data extends Component {
  state = {
    isLoading: true,
    data: [],
  };
  getData = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json? sort_by=rating"
    );
    this.setState({ data: movies, isLoading: false });
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    const { isLoading, data } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="data">
            {data.map((movie) => (
              <div key={movie.id} className="movie">
                <h1>{movie.title}</h1>
                <a href={movie.url} type="botton">link</a>
              </div>
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Data;
