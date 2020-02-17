import React, { Component } from "react";

class Subject extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>{this.props.title}</h1>
          <h2>{this.props.sub}</h2>
        </header>
      </div>
    );
  }
}

export default Subject;
