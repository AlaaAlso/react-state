import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import React, { Component } from "react";
import Counter from "./Components/Counter";
import "./App.css";
import Hookcounter from "./Components/HookCounter";

class App extends Component {
  state = {
    showandhide: false,
  };
  show = () => this.setState({ showandhide: !this.state.showandhide });
  render() {
    return (
      <div className="App">
        <Button
          onClick={this.show}
          variant="outline-dark"
          className="buttonstyle"
        >
          {this.state.showandhide ? "Hide" : "Show"}
        </Button>
        {this.state.showandhide === true && <Counter />}
        {/* <Hookcounter /> */}
      </div>
    );
  }
}

export default App;
