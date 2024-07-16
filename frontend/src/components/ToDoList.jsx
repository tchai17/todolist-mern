import React from "react";
import axios from "axios";

function ToDoList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/items/")
      .then((response) => setExpenses(response.data))
      .catch((error) =>
        console.error("There was an error fetching the expenses!", error)
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
