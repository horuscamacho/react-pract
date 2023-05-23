import React from "react";

function useLocalStorage(itemsName, initialValue) {
  const [items, setItems] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      let parsedItems = localStorage.getItem(itemsName);
      let parsedData = !!parsedItems ? JSON.parse(parsedItems) : initialValue;
      setItems(parsedData);
      setLoading(false);
    }, 1000);
    // eslint-disable-next-line
  }, [items]);

  const saveItems = (newItems) => {
    const stringifiedTodos = JSON.stringify(newItems);
    localStorage.setItem(itemsName, stringifiedTodos);
    setItems(newItems);
  };
  return { items, saveItems, loading, error };
}

export { useLocalStorage };
