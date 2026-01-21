import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import { set } from "immer/dist/internal";
import ExpandableText from "./components/ExpandableText";

//main App component
function App() {
  return (
    <div>
      <ExpandableText maxChars={50}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus labore
        temporibus corporis asperiores saepe! Maiores repellendus iusto expedita
        saepe velit omnis sequi consectetur praesentium recusandae nihil
        officiis ratione a odio eveniet eligendi, ullam similique necessitatibus
        dolor, sit dicta odit! Impedit aut placeat illum nemo, minima omnis
        reprehenderit blanditiis perspiciatis veniam natus a tempore magnam iure
        pariatur sapiente eum qui minus. Quaerat dolor cupiditate accusamus
        perspiciatis non totam consequatur vitae vel obcaecati cumque? Facere
        fugiat ipsum pariatur quos iusto impedit velit a iure, mollitia, quis
        nihil quibusdam voluptas labore earum minima? Cumque labore natus
        similique suscipit corporis, iusto voluptatem recusandae impedit.
      </ExpandableText>
    </div>
  );
}

export default App;
