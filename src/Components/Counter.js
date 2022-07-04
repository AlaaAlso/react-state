import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class Counter extends Component {
  state = {
    count: 0,
  };
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.state.count > 0 &&
      this.setState({
        count: this.state.count - 1,
      });
  };
  reset = () => {
    this.setState({
        count: this.state.count = 0,
      });
  }
  render() {
    return (
      <div className="counterstyle">
        <div className="counterstyle">
          <Button
            variant="outline-dark"
            className="buttonstyle"
            onClick={this.increment}
          >
            +
          </Button>
          <span className="spanstyle">{this.state.count}</span>
          <Button
            variant="outline-dark"
            className="buttonstyle"
            onClick={this.decrement}
          >
            _
          </Button>
        </div>
        <Button variant="outline-dark" className="buttonstyle" onClick={this.reset}>
          Reset
        </Button>
      </div>
    );
  }
}
