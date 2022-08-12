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

const Select = ({ items }) => {
  return (
    <div className="form-outline mb-4">
      <select className="form-control" id="exampleIdSelect">
        {items.map(item => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export { Input, Select };
