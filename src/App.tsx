import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

//main App component
function App() {
  const [isVisible, setIsVisible] = useState(false); //use hook unconditionally and only at the top level of the component
  const [isApproved, setIsApproved] = useState(true);

  let count = 0;

  const handleClick = () => {
    setIsVisible(true);
    count++; //state is stored outside of component lifecycle. State is managed by React, not the function
    console.log(isVisible); //react updates state asynchronously
    console.log(count);
  };

  return (
    <div>
      <Button onClick={handleClick}>Show!</Button>
    </div>
  );
}

export default App;
