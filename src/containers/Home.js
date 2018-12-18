import React, { Component } from "react";
import { Image, Grid, Row, Col } from "react-bootstrap";
import "./Home.css";

import mlogos from "../images/mlogos.png";

class Home extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="lander">
          <Grid>
            <Row>
              <Col md={8}>
                <h1>MarketUnity</h1>
                <p>MarketPlaces Integration Portal</p>
                <div>
                  <Image src={mlogos} responsive />
                </div>
              </Col>
              <Col md={4}>
                <h3>Welcome to app</h3>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Home;
