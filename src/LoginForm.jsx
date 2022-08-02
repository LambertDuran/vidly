import React, { Component } from "react";
import "./App.css";
import styles from "./styles.jsx";
import Input from "./Input";
//import cinema from "./img/cinema.jpg";
import cinema from "./img/cinema.webp";

class LoginForm extends Component {
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
      <form
        onSubmit={this.handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundImage: `url(${cinema})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh"
        }}
      >
        <div style={styles.rectOut}>
          <div className="sketchy">
            <Input
              title="Email Adress"
              type="email"
              placeholder="example@gmail.com"
              name="userName"
              onChange={this.handleChange}
              value={this.state.userName}
            ></Input>
            <Input
              title="Password"
              type="password"
              name="password"
              onChange={this.handleChange}
              subText="Must contain at least 1 digit, 1 letter and 1 special character"
              value={this.state.password}
            ></Input>
            <button type="submit" className="btn btn-primary m-4">
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default LoginForm;
