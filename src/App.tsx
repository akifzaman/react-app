import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import { set } from "immer/dist/internal";

//main App component
function App() {
  //immutable
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["pepperoni"],
  });

  // const handleClick = () => {
  //   //add new toppings without using immer
  //   setPizza({
  //     ...pizza,
  //     toppings: [...pizza.toppings, "bacon", "salami"],
  //   });
  // };

  const handleClick = () => {
    //add new toppings without using immer
    setPizza(
      produce(pizza, (draft) => {
        draft.toppings.push("bacon");
        draft.toppings.push("salami");
      })
    );
  };

  return (
    <div>
      <p>Pizza Name: {pizza.name}</p>
      <p>Pizza Toppings:</p>
      <ul>
        {pizza.toppings.map((topping) => (
          <li key={topping}>{topping}</li>
        ))}
      </ul>
      <Button onClick={handleClick}>Add New Toppings</Button>
    </div>
  );
}

export default App;
