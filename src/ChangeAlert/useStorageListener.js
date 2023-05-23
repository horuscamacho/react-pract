import React from "react";

function useStorageListener() {
  const [storageChange, setStorageChange] = React.useState(false);

  window.addEventListener("storage", (change) => {
    if (change.key === "TODOS_V1") {
      setStorageChange(true);
      setTimeout(() => {
        setStorageChange(false);
      }, 3000);
    }
  });
  return {
    show: storageChange,
    toggleShow: setStorageChange,
  };
}

export { useStorageListener };
