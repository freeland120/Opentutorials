import React, { Component } from "react";
import "./index.css";
import Subject from "./components/header";
import Subject_body from "./components/body";
import Subject_footer from "./components/footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: { title: "English", sub: "Computer Science" },
      midterm: { grade: "90", rank: "1" }
    };
  }
  render() {
    return (
      <div>
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        />

        <Subject_body
          grade={this.state.midterm.grade}
          rank={this.state.midterm.rank}
        />
        <Subject_footer />
      </div>
    );
  }
}

export default App;
