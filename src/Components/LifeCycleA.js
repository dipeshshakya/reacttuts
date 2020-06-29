import React, { Component } from "react";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "dipesh",
    };
    console.log("constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedState methods");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    console.log("render");
    return <div></div>;
  }
}

export default LifeCycleA;
