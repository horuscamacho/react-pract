import React from "react";

function useLocalStorage(itemsName, initialValue) {
  let parsedItems = localStorage.getItem(itemsName);
  let parsedData = parsedItems ? JSON.parse(parsedItems) : initialValue;
  const [items, setItems] = React.useState(parsedData);
  const saveItems = (newItems) => {
    const stringifiedTodos = JSON.stringify(newItems);
    localStorage.setItem(itemsName, stringifiedTodos);
    setItems(newItems);
  };
  return [items, saveItems];
}

export { useLocalStorage };
