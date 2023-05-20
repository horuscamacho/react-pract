import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { AppUI } from "./AppUI";

/*const defaultToDos = [
  {
    text: "Cortar cebolla",
    completed: false,
  },
  {
    text: "Tomar el curso de intro a React",
    completed: true,
  },
  {
    text: "Llorar con la llorona",
    completed: false,
  },
  {
    text: "Cortar pasto",
    completed: false,
  },
  {
    text: "Usar variables derivadas",
    completed: true,
  },
];*/
//localStorage.setItem("TODOS_V1", JSON.stringify(defaultToDos));
//localStorage.removeItem("TODOS_V1");

function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");

  const searchedTodos =
    todos.length &&
    todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
      /* return todo.text.toLowerCase().includes(searchValue.toLowerCase());*/
    });

  const completeTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  console.log("Log 1");

  React.useEffect(() => {
    console.log("Log 2");
  });

  /*  React.useEffect(() => {
            console.log("Log 2");
          }, [todos]);*/
  console.log("Log 3");

  const completeToDo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };
  const deleteToDo = (text) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      completeToDo={completeToDo}
      completeTodos={completeTodos}
      saveTodos={saveTodos}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      searchValue={searchValue}
      todos={todos}
      totalTodos={totalTodos}
      deleteToDo={deleteToDo}
    />
  );
}

export { App };
