import "./CreateToDoButton.css";

function CreateToDoButton() {
  return (
    <button
      className="CreateTodoButton"
      onClick={(event) => {
        console.log("Este es el evento", event);
        console.log("Este es el target", event.target);
      }}
    >
      +
    </button>
  );
}

export { CreateToDoButton };
