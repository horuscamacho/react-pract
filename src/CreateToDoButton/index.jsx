import React from "react";
import "./CreateToDoButton.css";

function CreateToDoButton({ setOpenModal, openModal }) {
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
