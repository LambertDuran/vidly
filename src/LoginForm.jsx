import React, { Component } from "react";
import "./App.css";
import "./LoginForm.css";
import Input from "./Input";
import movie from "./img/movie.jpg";
//import cinema from "./img/cinema.webp";

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
                      <div className="text-center">
                        <img
                          src={movie}
                          style={{ width: "185px" }}
                          alt="logo"
                        />
                        <h4 className="mt-1 mb-5 pb-1"></h4>
                      </div>

                      <form onSubmit={this.handleSubmit}>
                        <p>Login to your account</p>

                        <Input
                          type="email"
                          onChange={this.handleChange}
                          name="userName"
                          value={this.state.userName}
                          placeholder="Username"
                        />

                        <Input
                          type="password"
                          onChange={this.handleChange}
                          name="password"
                          value={this.state.password}
                          placeholder="Password"
                        />

                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                            type="button"
                          >
                            Log in
                          </button>
                          <a className="text-muted m-3" href="#!">
                            Forgot password?
                          </a>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                          >
                            Create new
                          </button>
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
