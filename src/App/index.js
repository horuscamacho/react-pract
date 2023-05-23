import React from "react";
import { useTodos } from "./useTodos";
import { ToDoHeader } from "../ToDoHeader";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { TodosEmpty } from "../TodosEmpty";
import { ToDoItem } from "../ToDoItem";
import { CreateToDoButton } from "../CreateToDoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { ChangeAlert } from "../ChangeAlert";

function App() {
  const {
    completeTodos,
    totalTodos,
    searchValue,
    searchedTodos,
    setSearchValue,
    loading,
    error,
    saveTodos,
    completeToDo,
    deleteToDo,
    openModal,
    setOpenModal,
    addToDo,
    todos,
  } = useTodos();
  return (
    <>
      <ToDoHeader loading={loading}>
        <ToDoCounter completeTodos={completeTodos} totalTodos={totalTodos} />
        <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </ToDoHeader>
      <ToDoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmpty={() => <TodosEmpty />}
        onEmptySearchResults={(searchText) => (
          <p>No hay resultados para {searchText}</p>
        )}
      >
        {(todo) => (
          <ToDoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            setTodos={saveTodos}
            todos={todos}
            onComplete={() => completeToDo(todo.text)}
            onDelete={() => deleteToDo(todo.text)}
          />
        )}
      </ToDoList>

      <CreateToDoButton setOpenModal={setOpenModal} openModal={openModal} />
      {openModal && (
        <Modal>
          <TodoForm setOpenModal={setOpenModal} addToDo={addToDo} />
        </Modal>
      )}
      <ChangeAlert />
    </>
  );
}

export { App };
