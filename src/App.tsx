import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

//main App component
function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
  });

  //const fullName = firstName + " " + lastName;

  const handleClick = () => {
    //console.log(fullName);
    setPerson({ firstName: "John", lastName: "Doe" });
    console.log(person.firstName + " " + person.lastName);
  };

  return (
    <div>
      <Button onClick={handleClick}>Show!</Button>
    </div>
  );
}

export default App;
