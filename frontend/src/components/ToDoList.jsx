import React from "react";
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
    <div>
      <h3>To Do List</h3>
      <ul>
        {items.map((item) => (
          <li key={item._id}>{item.description}</li>
        ))}
      </ul>
    </div>
  );
}
