import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App/";

function App2(props) {
  return (
    <div>
      {props.saludo}, {props.nombre}{" "}
    </div>
  );
}

function withSaludo(saludo) {
  return function WrappedComponentWithSaludo(WrappedComponent) {
    return function ComponenteDeVerdad(props) {
      return (
        <>
          <WrappedComponent {...props} saludo={saludo} />
          <p>Estamos acompañando al Wrapped component</p>
        </>
      );
    };
  };
}

const AppWithSaludo = withSaludo("Hola")(App2);

const root = ReactDOM.createRoot(document.getElementById("root"));
/*root.render([<App />, <App />, <App />]);*/
root.render(
  <App /> /*<AppWithSaludo
    saludo="Hey"
    nombre="Sinhue"
  />*/
);
