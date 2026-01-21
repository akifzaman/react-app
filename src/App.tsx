import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import { set } from "immer/dist/internal";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";

//main App component
function App() {
  return (
    <div>
      <Form />
    </div>
  );
}

export default App;
