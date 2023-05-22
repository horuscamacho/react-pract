import React from "react";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { CreateToDoButton } from "../CreateToDoButton";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { TodosEmpty } from "../TodosEmpty";
import { Modal } from "../Modal";
import { TodoContext } from "../ToDoContext";

function AppUI() {
  const { openModal } = React.useContext(TodoContext);
  return (
    <>
      <ToDoCounter />
      <ToDoSearch />
      <TodoContext.Consumer>
        {({
          loading,
          error,
          searchedTodos,
          saveTodos,
          completeToDo,
          deleteToDo,
          todos,
          searchValue,
        }) => (
          <ToDoList searchValue={searchValue}>
            {loading && <TodosLoading />}
            {error && <TodosError />}
            {!searchedTodos.length && !loading && <TodosEmpty />}
            {searchedTodos.map((todo) => (
              <ToDoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                setTodos={saveTodos}
                todos={todos}
                onComplete={() => completeToDo(todo.text)}
                onDelete={() => deleteToDo(todo.text)}
              />
            ))}
          </ToDoList>
        )}
      </TodoContext.Consumer>

      <CreateToDoButton />
      {openModal && <Modal>La funcionalidad de agregar TODO</Modal>}
    </>
  );
}

export { AppUI };
