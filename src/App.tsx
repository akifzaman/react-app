import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

//main App component
function App() {
  //immutable
  const [tags, setTags] = useState(["happy", "sad", "angry"]);

  const handleClick = () => {
    if (tags.includes("excited")) return;

    //Add
    setTags([...tags, "excited"]);

    //Remove
    setTags([...tags.filter((tag) => tag !== "angry")]);

    //update
    setTags([...tags.map((tag) => (tag === "sad" ? "content" : tag))]);
  };

  return (
    <div>
      {/* <Button onClick={handleClick}>Show!</Button> */}
      <ListGroup
        items={tags}
        heading="Expressions"
        onSelectItem={handleClick}
      />
    </div>
  );
}

export default App;
