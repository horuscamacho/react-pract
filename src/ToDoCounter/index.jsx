import "./ToDoCounter.css";

/*
const estilos = {
    backgroundColor: "#6d22fd",
}
*/

function ToDoCounter({ total, completed }) {
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
      Has completado <span>{completed}</span> de <span>{total}</span> TODOS
    </h1>
  );
}

export { ToDoCounter };
