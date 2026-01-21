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
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
      age: 25,
    },
  });

  const handleClick = () => {
    setGame(
      produce(game, (draft) => {
        draft.player.name = "Doe";
      })
    );
  };

  return (
    <div>
      <p>Player ID: {game.id}</p>
      <p>Player Name: {game.player.name}</p>
      <p>Player Age: {game.player.age}</p>
      <Button onClick={handleClick}>Update Player Name</Button>
    </div>
  );
}

export default App;
