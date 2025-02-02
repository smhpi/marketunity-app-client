import React, { Component } from "react";
import {
  FormGroup,
  FormControl,
  ControlLabel,
  Grid,
  Row,
  Col,
  Image
} from "react-bootstrap";
import "./Login.css";
import muhome from "../images/muhome.png";
import { Auth } from "aws-amplify";
import LoaderButton from "../components/LoaderButton";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });

    try {
      await Auth.signIn(this.state.email, this.state.password);
      this.props.userHasAuthenticated(true);
      this.props.history.push("/");
    } catch (e) {
      alert(e.message);
    }
  };

  render() {
    return (
      <div className="jumbotron">
        <Grid>
          <Row>
            <Col md={8}>
              <h1>MarketUnity</h1>
              <p>MarketPlaces Integration Portal</p>
              <div>
                <Image src={muhome} responsive />
              </div>
            </Col>
            <Col md={4}>
              <div className="Login">
                <form onSubmit={this.handleSubmit}>
                  <FormGroup controlId="email" bsSize="large">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                      autoFocus
                      type="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                      value={this.state.password}
                      onChange={this.handleChange}
                      type="password"
                    />
                  </FormGroup>
                  <LoaderButton
                    block
                    bsSize="large"
                    disabled={!this.validateForm()}
                    type="submit"
                    isLoading={this.state.isLoading}
                    text="Login"
                    loadingText="Logging in..."
                  />
                </form>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Login;
