import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

//main App component
function App() {
  //immutable
  const [drink, setDrink] = useState({
    title: "Coke",
    price: 5,
  });

  const handleClick = () => {
    //doing the next two lines will not render as expected because drink is immutable
    // drink.price = 6;
    // setDrink(drink);

    //pass a new object to setDrink to update the state
    // const newDrink = {
    //   title: drink.title,
    //   price: 6,
    // };
    // setDrink(newDrink);

    //use the spread operator to copy the existing properties and update the one property that needs to change
    setDrink({ ...drink, price: 6 });
  };

  return (
    <div>
      {drink.price}
      <Button onClick={handleClick}>Show!</Button>
    </div>
  );
}

export default App;
