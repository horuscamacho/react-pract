import React from "react";
import "./CreateToDoButton.css";
import { TodoContext } from "../ToDoContext";

function CreateToDoButton() {
  const { setOpenModal, openModal } = React.useContext(TodoContext);
  return (
    <button
      className="CreateTodoButton"
      onClick={(event) => {
        event.preventDefault();
        setOpenModal(!openModal);
      }}
    >
      +
    </button>
  );
}

export { CreateToDoButton };
