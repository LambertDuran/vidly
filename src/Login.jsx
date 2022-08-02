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

  handleChange = ({ target: input }) => {
    this.setState({ ...this.state, [input.name]: input.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    // Call the server
    console.log("submitted");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div style={styles.rectOut}>
          <div className="sketchy">
            <Form
              title="Email Adress"
              type="email"
              placeholder="example@gmail.com"
              name="userName"
              onChange={this.handleChange}
              value={this.state.userName}
            ></Form>
            <Form
              title="Password"
              type="password"
              name="password"
              onChange={this.handleChange}
              subText="Must contain at least 1 digit, 1 letter and 1 special character"
              value={this.state.password}
            ></Form>
            <button type="submit" className="btn btn-primary m-4">
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Login;
