import React from "react";
import Joi from "joi-browser";
import Form from "./common/Form";
import * as userService from "./services/userServices";

class RegisterForm extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: { userName: "", password: "", pseudo: "" },
      errors: { userName: "", password: "", pseudo: "" },
    };

    this.schema = {
      userName: Joi.string().label("Username").required(),
      password: Joi.string().label("Password").min(5).required(),
      pseudo: Joi.string().label("Pseudo").required(),
    };
  }

  doSubmit = async () => {
    try {
      await userService.resgister(this.state.data);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.userName = ex.response.data;
        this.setState({ errors });
      }
    }

    console.log("submitted");
  };

  render() {
    return (
      <div style={{ justifyContent: "center", padding: 100 }}>
        <form onSubmit={this.handleSubmit}>
          <p>Create your account</p>
          {this.renderInput("userName", "Username", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("pseudo", "Pseudo")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
