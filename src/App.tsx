import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

//main App component
function App() {
  //immutable
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug1", fixed: false },
    { id: 2, title: "Bug2", fixed: false },
  ]);

  const handleClick = () => {
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  return (
    <div>
      {bugs[0].fixed.toString()}
      <Button onClick={handleClick}>Show!</Button>
    </div>
  );
}

export default App;
