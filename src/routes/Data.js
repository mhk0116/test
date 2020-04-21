import React, { Component } from "react";
import "./Data.css";
import Project from "../components/Project"

class Data extends Component {
  state = {
    isLoading: true,
    // 임시 데이터 형식
    data: [
      {
        id: 1,
        project: "Personal Mobile",
        name: ["data1", "data2", "data3", "data4"],
        link: ["link1", "link2", "link3", "link4"],
      },
      {
        id: 2,
        project: "Charging Station",
        name: ["data5", "data6", "data7", "data8"],
        link: ["link5", "link6", "link7", "link8"],
      },
    ],
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
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
            {data.map((mydata) => (
              <Project
                key={mydata.id}
                id={mydata.id}
                project={mydata.project}
                name={mydata.name}
                link={mydata.link}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Data;
