import React from "react";
import "./ToDoCounter.css";

/*
const estilos = {
    backgroundColor: "#6d22fd",
}
*/

function ToDoCounter({ completeTodos, totalTodos, loading }) {
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
      className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}
    >
      Has completado <span>{completeTodos}</span> de <span>{totalTodos}</span>{" "}
      TODOS
    </h1>
  );
}

export { ToDoCounter };
