import React, { Component } from "react";
import ReactDOM from "react-dom";
import Fire from "../Fire";

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    Fire.auth().signOut();
  }

  render() {
    return (
      <div>
        <h1>Login home</h1>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default Home;
