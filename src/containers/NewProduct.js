import React, { Component } from "react";
import { API } from "aws-amplify";
import {
  FormGroup,
  FormControl,
  ControlLabel,
  Grid,
  Row,
  Col
} from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import config from "../config";
import "./NewProduct.css";

class NewProduct extends Component {
  constructor(props) {
    super(props);
    this.file = null;
    this.state = {
      isLoading: null,
      title: "",
      barcode: "",
      content: "",
      bbquantity: "",
      ssquantity: ""
    };
  }

  validateForm() {
    return this.state.content.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleFileChange = event => {
    this.file = event.target.file[0];
  };

  handleSubmit = async event => {
    event.preventDefault();
    if (this.file && this.file.size > config.MAX_ATTACHMENT_SIZE) {
      alert(
        `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE /
          1000000} MB.`
      );
      return;
    }

    this.setState({ isLoading: true });

    try {
      await this.createProduct({
        content: this.state.content
      });
      this.props.history.push("/");
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  };

  createProduct(product) {
    return API.post("productes", "/productes", {
      body: product
    });
  }

  render() {
    return (
      <div className="NewProduct">
        <form onSubmit={this.handleSubmit}>
          <div className="jumbotron">
            <FormGroup controlId="title">
              <ControlLabel>Title</ControlLabel>
              <FormControl
                onChange={this.handleChange}
                value={this.state.title}
                placeholder="Short Sleeve T-Shirt"
                type="text"
                bsSize="lg"
              />
            </FormGroup>
            <FormGroup controlId="content">
              <ControlLabel>Description</ControlLabel>
              <FormControl
                onChange={this.handleChange}
                value={this.state.content}
                componentClass="textarea"
              />
            </FormGroup>
          </div>
          <div className="jumbotron">
            <FormGroup controlId="file">
              <ControlLabel>Pictures</ControlLabel>
              <FormControl onChange={this.handleFileChange} type="file" />
            </FormGroup>
          </div>
          <div className="jumbotron">
            <Grid>
              <Row>
                <Col md={4}>
                  <FormGroup controlId="price">
                    <ControlLabel>Price</ControlLabel>

                    <FormControl
                      onChange={this.handleChange}
                      value={this.state.price}
                      bsSize="lg"
                      type="text"
                      placeholder="$0.00"
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup controlId="barcode">
                    <ControlLabel>Barcode</ControlLabel>
                    <FormControl
                      onChange={this.handleChange}
                      value={this.state.barcode}
                      bsSize="lg"
                      type="text"
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup controlId="mpn">
                    <ControlLabel>MPN#</ControlLabel>
                    <FormControl
                      onChange={this.handleChange}
                      value={this.state.mpn}
                      type="text"
                      bsSize="lg"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <p>Inventory</p>
                <Col md={6}>
                  <FormGroup controlId="ssquantity">
                    <ControlLabel>Shopify Qt</ControlLabel>
                    <FormControl
                      onChange={this.handleChange}
                      value={this.state.ssquantity}
                      type="number"
                      bsSize="lg"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup controlId="bbquantity">
                    <ControlLabel>BestBuy Qt</ControlLabel>
                    <FormControl
                      onChange={this.handleChange}
                      value={this.state.bbquantity}
                      type="number"
                      bsSize="lg"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Grid>
          </div>
          <LoaderButton
            block
            bsStyle="primary"
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Create"
            loadingText="Creating..."
          />
        </form>
      </div>
    );
  }
}

export default NewProduct;
