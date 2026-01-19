import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "bootstrap/dist/css/bootstrap.min.css";

//ReactDOM is used to render the React application into the DOM
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // enables additional checks and warnings for its descendants
  //this does not affect the production build
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
