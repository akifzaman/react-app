import { MouseEvent } from "react";
import { useState } from "react";

//usiung props to pass data and function to component
interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

//destructuring props object for cleaner code
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //Hook to manage selected index state
  let [selectedIndex, setSelectedIndex] = useState(-1);

  //event handler for click events on list items
  const handleClick = (
    event: MouseEvent<HTMLLIElement>,
    item: string,
    index: number
  ) => {
    console.log("Clicked! " + item.toString() + " at index " + index);
    setSelectedIndex(index);
    onSelectItem(item);
  };

  return (
    // alternate of fragment is <>
    <>
      <h1>{heading}</h1>
      {/* if length is 0, only render the paragraph and nothing else */}
      {items.length === 0 && <p>No items found.</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={(event) => handleClick(event, item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
