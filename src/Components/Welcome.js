import React, { Component } from "react";

export class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.msg}
          <br />
        </h1>
      </div>
    );
  }
}

export default Welcome;
