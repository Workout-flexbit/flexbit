import React, { Component } from "react";
import axios from "axios";
import { setToken } from "../../services/tokenService";


// Nice clean and easy to read component!
class Login extends Component {
  state = {
    type: "login",
    message: null,
    user: this.props.user
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password, type } = this.state;
    const route = type === "login" ? "login" : "signup";

    try {
      const res = await axios.post(`/api/users/${route}`, {
        data: {
          email: email,
          password: password
        }
      });
      const token = res.data.data.token;
      setToken(token);
      this.props.setUser(res.data.data.token);
      this.props.hideLogin();
    } catch (e) {
      this.setState({ message: e });
    }
  };

  changeForm = type => {
    this.setState({ type: type });
  };

  render() {
    const { type } = this.state;

    return (
      <div className="modal is-active level">
        <div className="modal-background level-item">
          <div className="modal-content notification">
            <div className="field is-grouped">
              <div className="control">
                <button
                  className="button is-primary"
                  active={type}
                  onClick={() => this.changeForm("login")}
                >
                  Login
                </button>
              </div>
              <div className="control">
                <button
                  className="button is-primary"
                  active={type}
                  onClick={() => this.changeForm("signup")}
                >
                  Sign up
                </button>
              </div>
            </div>
            <form className="field" onSubmit={this.handleSubmit}>
              <p className="control">You'll need to login to continue</p>
              <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left">
                  <input
                    className="input"
                    name="email"
                    type="email"
                    placeholder="example@email.com"
                    onChange={this.handleChange}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control has-icons-left">
                  <input
                    className="input"
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </div>
              </div>
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-primary" type="submit">
                    {type}
                  </button>
                </div>
                <div className="control">
                  <button
                    className="button is-primary"
                    onClick={this.props.hideLogin}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
