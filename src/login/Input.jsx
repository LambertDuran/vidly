import React from "react";

const Input = ({ type, errors, ...rest }) => {
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
