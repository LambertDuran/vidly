import React from "react";

const Input = ({ errors, type = "text", ...rest }) => {
  return (
    <>
      {errors && <span className="alet alert-danger">{errors}</span>}
      <div className="form-outline mb-4">
        <input {...rest} className="form-control" type={type} id={type} />
      </div>
    </>
  );
};

export default Input;
