import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { CreateToDoButton } from "../CreateToDoButton";
import React from "react";

function AppUI({
  completeTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeToDo,
  deleteToDo,
  saveTodos,
  todos,
}) {
  return (
    <>
      <ToDoCounter completed={completeTodos} total={totalTodos} />
      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <ToDoList searchValue={searchValue}>
        {!!searchedTodos.length &&
          searchedTodos.map((todo) => (
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
      <CreateToDoButton />
    </>
  );
}

export { AppUI };
