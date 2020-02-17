import React, { Component } from "react";
import "./index.css";
import Subject from "./components/header";
import Subject_body from "./components/body";
import Subject_footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div>
        <Subject title="WEB1.0" />
        <Subject title="WEB2.0" />
        <Subject_body />
        <Subject_footer />
      </div>
    );
  }
}

export default App;
