import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

//main App component
function App() {
  let items = ["1", "2", "3", "4", "5"];

  const handleSelectItem = (item: string) => {
    console.log("Selected item: " + item);
  };

  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    // <div className="App">
    //   <ListGroup
    //     items={items}
    //     heading="Cities"
    //     onSelectItem={handleSelectItem}
    //   />
    //   <ListGroup
    //     items={items}
    //     heading="Cities"
    //     onSelectItem={handleSelectItem}
    //   />
    // </div>

    // <div>
    //   <Alert>A simple primary alert—check it out!</Alert>
    // </div>

    <div>
      <Button color="warning" onClick={handleClick}>
        Shop Now!
      </Button>
    </div>
  );
}

export default App;
