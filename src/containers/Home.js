import React, { Component } from "react";
import { Image } from "react-bootstrap";
import "./Home.css";
import muhome from "../images/muhome.png";

class Home extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="lander">
          <h1>MarketUnity</h1>
          <p>MarketPlaces Integration Portal</p>
          <div>
            <Image src={muhome} responsive />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
