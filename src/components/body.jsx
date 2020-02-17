import React, { Component } from "react";

class Subject_body extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>{this.props.grade}</li>
          <li>{this.props.rank}</li>
          <li></li>
        </ul>
      </nav>
    );
  }
}

export default Subject_body;
