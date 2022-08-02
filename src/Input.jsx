import React from "react";

const Input = ({ type, placeholder, name, onChange, value }) => {
  return (
    <div className="form-outline mb-4">
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        name={name}
        id={type}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
