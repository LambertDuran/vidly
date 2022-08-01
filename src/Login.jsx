import React, { Component } from "react";
import "./App.css";
import styles from "./styles.jsx";
import Form from "./Form";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
    console.log(this.state[e.target.name]);
  };

  handleClick = () => {
    console.log(this.state);
  };

  render() {
    return (
      <form>
        <div style={styles.rectOut}>
          <div className="sketchy">
            <Form
              title="Email Adress"
              type="email"
              placeholder="example@gmail.com"
              name="userName"
              onChange={this.handleChange}
            ></Form>
            <Form
              title="Password"
              type="password"
              name="password"
              onChange={this.handleChange}
              small="Must contain at least 1 digit, 1 letter and 1 special character"
            ></Form>
            <button
              type="submit"
              className="btn btn-primary m-4"
              onClick={this.handleClick}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Login;
