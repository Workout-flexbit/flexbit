import React, { Component } from "react";
import Nav from "./Nav";
import Login from "./Login";
import ExerciseList from "./ExerciseList";
import Homepage from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginActive: false,
      user: false
      // switch to skip login for development
      // loginActive: true,
      // user: true
    };

    // We usually want to avoid side effects in the constructor in react, we should move this to a lifecycle method
    this.fetchExerciseList();
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  toggleLogin = () =>
    this.setState(prevState => ({ showLogin: !prevState.showLogin }));

  async fetchExerciseList() {
    try {
      const res = await axios.get("/api/exercises");
      this.setState({
        exerciseList: res.data.data
      });
    } catch (e) {
      console.error("an error was encountered", e);
    }
  }

  setUser = token => this.setState({ user: token }, () => {});

  logout = () => this.setState({ user: false });

  render() {
    return (
      <Router>
        <>
          <Nav
            user={this.state.user}
            toggleLogin={this.toggleLogin}
            logout={this.logout}
          />
          {this.state.showLogin && !this.state.user && (
            <Login
              hideLogin={this.toggleLogin}
              setUser={this.setUser}
              user={this.state.user}
            />
          )}
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Homepage
                  user={this.state.user}
                  exerciseList={this.state.exerciseList}
                />
              )}
            />
            <Route
              exact
              path="/exerciselist"
              render={props => (
                <ExerciseList exerciseList={this.state.exerciseList} />
              )}
            />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
