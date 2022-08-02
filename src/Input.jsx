import React from "react";

const Input = ({
  title,
  type,
  placeholder,
  name,
  onChange,
  subText,
  value
}) => {
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
        value={value}
      />
      {subText && (
        <small
          id={type}
          className="form-text text-muted"
          style={{ fontSize: "1rem", letterSpacing: "0.1ch" }}
        >
          {subText}
        </small>
      )}
    </div>
  );
};

export default Input;