import React from "react";

const Form = ({ title, type, placeholder, name, onChange, subText }) => {
  return (
    <div className="form-group m-4">
      <label htmlFor={type}>{title}</label>
      <input
        type={type}
        className="form-control"
        id={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
      {subText && (
        <small
          id={type}
          className="form-text text-muted"
          style={{ fontSize: "1rem", letterSpacing: "0.1ch" }}
        >
          subText
        </small>
      )}
    </div>
  );
};

export default Form;
