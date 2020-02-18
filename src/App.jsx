import React, { Component } from "react";
import "./index.css";
import Subject from "./components/header";
import Subject_body from "./components/body";
import Subject_footer from "./components/footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: { title: "Human", sub: "Not Human" },
      midterm: { grade: "90", rank: "1" },

      students: [
        { id: 1, name: "YDG", age: "27", major: "Computer Science" },
        { id: 2, name: "LYS", age: "27", major: "Architecture" },
        { id: 3, name: "KMH", age: "30", major: "Korean" }
      ]
    };
  }
  render() {
    return (
      <div>
        {/* <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        /> */}

        <header>
          <h1>
            <a
              href="/"
              onClick={function(e) {
                e.preventDefault();
                alert("Hi~");
                this.setState({
                  mode: "welcome"
                });
              }.bind(this)}
            >
              {this.state.subject.title}
            </a>
          </h1>
          {this.state.subject.sub}
        </header>

        <Subject_body
          grade={this.state.midterm.grade}
          rank={this.state.midterm.rank}
        />
        <Subject_footer data={this.state.students} />
      </div>
    );
  }
}

export default App;
