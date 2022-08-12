import React from "react";

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="col-2">
      <form className="form-inline my-2">
        <input
          className="form-control mr-sm-2"
          placeholder="Search"
          aria-label="Search"
          type="search"
          onChange={({ target }) => handleSearch(target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
