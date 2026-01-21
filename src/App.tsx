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
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1, price: 100 },
      { id: 2, title: "Product 2", quantity: 1, price: 50 },
    ],
  });

  const handleClick = () => {
    setCart(
      produce(cart, (draft) => {
        draft.items.map((item) => {
          const foundItem = item.id === 1 ? item : null;
          if (foundItem) {
            foundItem.quantity = 2;
          }
        });
      })
    );
  };

  return (
    <div>
      <p>Items</p>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.title} {item.quantity}
          </li>
        ))}
      </ul>
      <Button onClick={handleClick}>Add New Items</Button>
    </div>
  );
}

export default App;
