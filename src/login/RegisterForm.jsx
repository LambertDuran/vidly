import React from "react";
import Joi from "joi-browser";
import Form from "./Form";

class RegisterForm extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: { userName: "", password: "", pseudo: "" },
      errors: { userName: "", password: "", pseudo: "" }
    };

    this.schema = {
      userName: Joi.string()
        .label("Username")
        .required(),
      password: Joi.string()
        .label("Password")
        .min(5)
        .required(),
      pseudo: Joi.string()
        .label("Pseudo")
        .required()
    };
  }

  render() {
    return (
      <div style={{ justifyContent: "center", padding: 100 }}>
        <p>Create your account</p>
        {this.renderInput("userName", "Username", "email")}
        {this.renderInput("password", "Password", "password")}
        {this.renderInput("pseudo", "Pseudo")}
        {this.renderButton("Register")}
      </div>
    );
  }
}

export default RegisterForm;
