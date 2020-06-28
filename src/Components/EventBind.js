import React, { Component } from "react";

export class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello dipesh",
    };
  }
  clickHandler() {
    this.setState({
      message: "Goodbye",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>

        <button onClick={this.clickHandler.bind(this)}>click</button>
      </div>
    );
  }
}

export default EventBind;
