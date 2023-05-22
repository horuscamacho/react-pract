import React from "react";
import "./ToDoCounter.css";
import { TodoContext } from "../ToDoContext";

/*
const estilos = {
    backgroundColor: "#6d22fd",
}
*/

function ToDoCounter() {
  const { completeTodos, totalTodos } = React.useContext(TodoContext);
  return (
    <h1
      style={
        /*estilos*/ {
          /* backgroundColor: "#6d22fd",
                                                                             textAlign: "center",
                                                                             margin: 0,
                                                                             padding: '48px'*/
        }
      }
      className="TodoCounter"
    >
      Has completado <span>{completeTodos}</span> de <span>{totalTodos}</span>{" "}
      TODOS
    </h1>
  );
}

export { ToDoCounter };
