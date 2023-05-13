import React from "react";

function SearchBox(props) {
  return (
    <div>
      <input
        value={props.inputValue}
        className="pa3 ma2 w-2-l br4 w-20"
        type="search"
        placeholder="type a keyword for your workout"
        onChange={props.onChange}
      />
    </div>
  );
}

export default SearchBox;
