import React from "react";
import { ToDoCounter } from "./ToDoCounter";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoList } from "./ToDoList";
import { ToDoItem } from "./ToDoItem";
import { CreateToDoButton } from "./CreateToDoButton";

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
function useLocalStorage(itemsName, initialValue) {
  let parsedItems = localStorage.getItem(itemsName);
  const [items, setItems] = React.useState(
    parsedItems ? JSON.parse(parsedItems) : initialValue
  );
  const saveItems = (newItems) => {
    const stringifiedTodos = JSON.stringify(newItems);
    localStorage.setItem(itemsName, stringifiedTodos);
    setItems(newItems);
  };
  return [items, saveItems];
}

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
    console.log(newTodos);
  };

  return (
    <>
      <ToDoCounter completed={completeTodos} total={totalTodos} />
      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <ToDoList searchValue={searchValue}>
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
      <CreateToDoButton />
    </>
  );
}

export default App;
