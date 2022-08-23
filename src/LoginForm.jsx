import React from "react";
import "./App.css";
import "./LoginForm.css";
import Form from "./common/Form";
import movie from "./img/movie.jpg";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import { login } from "./services/authServices";

class LoginForm extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: { userName: "", password: "" },
      errors: { userName: "", password: "" },
    };

    this.schema = {
      userName: Joi.string().label("Username").required(),
      password: Joi.string().label("Password").required(),
    };
  }

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const { data: jwt } = await login(data.userName, data.password);
      localStorage.setItem("token", jwt);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.userName = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <section
        className="h-25 gradient-form"
        style={{ backgroundColor: "#eee" }}
      >
        <div className="container py-5 h-25">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center" style={{ padding: 50 }}>
                        <img
                          src={movie}
                          style={{ width: "185px" }}
                          alt="logo"
                        />
                      </div>

                      <form onSubmit={this.handleSubmit}>
                        <p>Login to your account</p>

                        {this.renderInput("userName", "Username", "email")}
                        {this.renderInput("password", "Password", "password")}

                        <div className="text-center pt-1 mb-5 pb-1">
                          {this.renderButton("Log in")}
                          <a className="text-muted m-3" href="#!">
                            Forgot password?
                          </a>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <Link to="/register">
                            <button
                              type="button"
                              className="btn btn-outline-danger"
                            >
                              Create new
                            </button>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">
                        Vildly, much more than a streaming service!
                      </h4>
                      <p className="small mb-0">
                        Vidly is a new concept of video platform that allow
                        customer to watch video in a more decentralized way. As
                        an alternative at Netflix, we propose +1000 nodes active
                        every day, that allow you to watch your favorite movies
                        without being concern of the privacy of your data.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LoginForm;
