import React from "react";
import { useStorageListener } from "./useStorageListener";

function ChangeAlert() {
  const { show } = useStorageListener();
  if (show) {
    return <p>Hubo cambios</p>;
  } else {
    return null;
  }
}

export { ChangeAlert };
