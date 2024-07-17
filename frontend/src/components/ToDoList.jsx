import React, { useState, useEffect } from "react";
import axios from "axios";

function ToDoList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/items/")
      .then((response) => setItems(response.data))
      .catch((error) =>
        console.error("There was an error fetching the ToDoList!", error)
      );
  }, []);

  return (
    <>
      <h3>To Do List</h3>
      <ul>
        {items.map((item) => (
          <li key={item._id}>{item.description}</li>
        ))}
      </ul>
      <button>
        Add task
      </button>
    </>
  );
}

// need to export the ToDoList component to allow it to be imported into the App
export default ToDoList;