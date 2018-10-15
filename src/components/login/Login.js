import React, { Component } from "react";
import ReactDOM from "react-dom";
import Fire from "../Fire";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }

  login(e) {
    e.preventDefault();
    Fire.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(err => {
        console.log(err);
      });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <label for="exampleInputEmail">Email Address</label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              className=""
              id="exampleInputEmail"
            />
          </div>

          <div>
            <label for="exampleInputEmail">Password</label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              className=""
              id="exampleInputEmail"
            />
          </div>
          <button type="submit" onClick={this.login}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
