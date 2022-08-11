import React from "react";

const SearchBar = (props) => {
  return (
    <div className="col-2" style={{ padding: 8 }}>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          placeholder="Search"
          aria-label="Search"
          type="search"
        />
      </form>
    </div>
  );
};

export default SearchBar;
