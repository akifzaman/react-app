import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

//main App component
function App() {
  //immutable
  const [cartItems, setCartItems] = useState(["item1", "item2", "item3"]);

  const onClear = () => {};

  return (
    <div>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
}

export default App;
