import React, { Component } from "react";
import Exercise from "../Exercise/Exercise";

class ExerciseList extends Component {
  constructor() {
    super();
    this.state = {
      noResultText: "",
      noResultClasses: ""
    };
  }

  componentDidMount() {
    // Nice, thinking about the UX of the unhappy-path! Love it! 😍
    const noRes = setTimeout(() => {
      this.setState({
        noResultText:
          "It looks like no exercises were loaded! <strong>Double Check Server Connection</strong>",
        noResultClasses: "notification is-danger"
      });
    }, 1000);
    return noRes;
  }

  exerciseEl = exerciseList => {
    return exerciseList.map((exercise, i) => (
      <Exercise key={i} exercise={exercise} canDelete={false} />
    ));
  };

  componentWillUnmount() {
    clearInterval(this.setTimeout); // Good catch remembering to cleanup your timeouts!
  }

  render() {
    const { exerciseList } = this.props;

    return (
      <section className="container">
        <h1 className="title">Exercise List</h1>
        {exerciseList ? (
          <ul>{this.exerciseEl(exerciseList)}</ul>
        ) : (
          <div className={this.state.noResClasses}>{this.state.noResText}</div>
        )}
      </section>
    );
  }
}

export default ExerciseList;
