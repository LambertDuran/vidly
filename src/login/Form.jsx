import { Component } from "react";
import Input from "./Input";
import Joi from "joi-browser";

class Form extends Component {
  handleChange = ({ target: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    // Modify state
    this.setState({ data, errors });
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = e => {
    // Prevent validation without filling form
    e.preventDefault();

    // Check for errors
    const errors = this.validate();

    this.setState({ errors: errors || {} });

    // Call the server
    if (errors) return;

    this.doSubmit();
  };

  renderInput = (name, placeholder, type = "Text") => {
    const { errors, data } = this.state;
    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        onChange={this.handleChange}
        placeholder={placeholder}
        errors={errors[name]}
      />
    );
  };

  renderButton = label => {
    return (
      <button
        className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
        type="submit"
        disabled={this.validate()}
      >
        {label}
      </button>
    );
  };
}

export default Form;
