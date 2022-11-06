import React from "react";

function Search(props) {
  const { children, placeholderTxt} = props;
  return (
    <div className="search">
      <input
        type="search"
        name="Search"
        id="search"
        placeholder={placeholderTxt}
        
      />
      {children}

      
    </div>
  );
}

export default Search;
