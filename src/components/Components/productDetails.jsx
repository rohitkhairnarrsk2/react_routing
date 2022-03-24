import React, { Component } from "react";
class ProductDetails extends Component {
  state = {};
  handleSave = () => {
    this.props.history.push("/post");
  };
  logOut = () => {
    this.props.history.replace("/");
  };
  render() {
    console.log("this.props.history =", this.props);
    return (
      <React.Fragment>
        <h1>Product Details : {this.props.match.params.id}</h1>
        <button
          onClick={this.props.history.goBack}
          className="btn btn-info m-2"
        >
          Back
        </button>

        <button onClick={this.handleSave} className="btn btn-primary m-2">
          Save
        </button>

        <button onClick={this.logOut} className="btn btn-primary m-2">
          log Out
        </button>
      </React.Fragment>
    );
  }
}

export default ProductDetails;
