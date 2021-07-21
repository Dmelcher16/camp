import React from "react";
import "./SearchInput.css";

function SearchInput(props) {
  return (
    <>
      <div className="input-container">
        <form className="search-input-div form-inline">
          <input
            className=" search-input"
            type="text"
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            name="term"
            id="term"
            {...props}
          />
        </form>
      </div>
    </>
  );
}

export default SearchInput;
