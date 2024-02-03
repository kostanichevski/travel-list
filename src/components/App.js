import { useState } from "react";
import Logo from "./Logo"; // default export
import Form from "./Form"; // there are named and default exports! both work fine
import { PackingList } from "./PackingList"; //named export
import { Stats } from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 12, packed: false },
// ];

//using child to parent communication by using props and by lifting states
export default function App() {
  const [items, setItems] = useState([]); // we lifted this state and the function handleAddItems because it was needed by other sibling components.

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to clear the whole list?"
    );
    if (confirmed) {
      setItems([]);
    }
  }

  function handleAddItems(item) {
    // setItems(item=> items.push(item)) this is forbidden in react as it mutates(changes) the array
    setItems((items) => [...items, item]);
  }

  //we pass in the id as an argument so that the funciton knows which item to delete
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    ); //we are using .map method to create a new array everytime that it is changed that matches the old one in length but is just updated
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
