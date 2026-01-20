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
    address: {
      city: "New York",
      zipCode: 10001,
    },
  });

  const handleClick = () => {
    //to update the zipCode only
    setDrink({ ...drink, address: { ...drink.address, zipCode: 20002 } });
    console.log(drink.address.zipCode);
  };

  return (
    <div>
      {drink.address.zipCode}
      <Button onClick={handleClick}>Show!</Button>
    </div>
  );
}

export default App;
