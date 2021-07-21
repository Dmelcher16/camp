import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchInput.css";

function SearchInput(props) {
  return (
    <>
      <div className="input-container">
        <form className="search-input-div form-inline">
          {/* <label for="term">
            <FontAwesomeIcon icon={faSearch} color={props.iconColor} />
          </label> */}
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
