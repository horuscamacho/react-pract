import React from "react";
import "./ToDoSearch.css";
import { TodoContext } from "../ToDoContext";

function ToDoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
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
