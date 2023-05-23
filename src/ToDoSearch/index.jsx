import React from "react";
import "./ToDoSearch.css";

function ToDoSearch({ searchValue, setSearchValue, loading }) {
  return (
    <input
      className="TodoSearch"
      placeholder="Cortar cebolla"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
      disabled={loading}
    />
  );
}

export { ToDoSearch };
