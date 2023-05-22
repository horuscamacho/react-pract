import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    items: todos,
    saveItems: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
    /* return todo.text.toLowerCase().includes(searchValue.toLowerCase());*/
  });

  const [openModal, setOpenModal] = React.useState(true);

  const completeTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  /*  console.log("Log 1");*/

  /*React.useEffect(() => {
                                                  console.log("Log 2");
                                                });*/

  /*React.useEffect(() => {
                                            console.log("Log 2");
                                          }, [todos]);
                                          console.log("Log 3");*/

  const completeToDo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };
  const deleteToDo = (text) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        searchedTodos,
        completeTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        completeToDo,
        deleteToDo,
        saveTodos,
        todos,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
