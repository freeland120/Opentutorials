import React, { Component } from "react";

class Subject_footer extends Component {
  render() {
    const lists = [];
    const students = this.props.data;
    console.log(students.length);
    for (let i = 0; i < students.length; i++) {
      lists.push(
        <div key={students[i].id}>
          {students[i].name}
          <br />
          {students[i].age}
        </div>
      );
    }
    return <footer>{lists}</footer>;
  }
}

export default Subject_footer;
