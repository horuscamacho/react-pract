import React from "react";
import "./ToDoSearch.css";

function ToDoSearch({ setSearchValue, searchValue }) {
  return (
    <input
      className="TodoSearch"
      placeholder="Cortar cebolla"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { ToDoSearch };
