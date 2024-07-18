import React, { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AddTask from "./AddTask";

function ToDoList() {
  const [toDoItems, setToDoItems] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3000/tasks",
    })
      .then((response) => setToDoItems(response.data))
      .catch((error) =>
        console.error("Error connecting to backend server", error)
      );
  }, []);

  const handleTaskUpdate = (id, isDone) => {
    setToDoItems((prevItems) => {
      return prevItems.map((item) =>
        item._id === id ? { ...item, isDone } : item
      );
    });
  };

  const tableTitleFormat =
    "text-500 font-sans text-lg font-semibold text-start subpixel-antialiased";

  const notDoneItems = toDoItems
    .filter((task) => !task.isDone)
    .map((task) => (
      <ToDoItem
        key={task._id}
        _id={task._id}
        description={task.description}
        isDone={task.isDone}
        createdDate={task.createdDate}
        onTaskUpdate={handleTaskUpdate}
      />
    ));

  const doneItems = toDoItems
    .filter((task) => task.isDone)
    .map((task) => (
      <ToDoItem
        key={task._id}
        _id={task._id}
        description={task.description}
        isDone={task.isDone}
        createdDate={task.createdDate}
        onTaskUpdate={handleTaskUpdate}
      />
    ));

  return (
    <>
      <h2 className="text-3xl font-semibold px-3.5 subpixel-antialiased">
        To Do
      </h2>
      <Table className="font-sans">
        <TableHeader>
          <TableRow>
            <TableHead className={tableTitleFormat}>Description</TableHead>
            <TableHead className={tableTitleFormat}>Created Date</TableHead>
            <TableHead className={tableTitleFormat + " text-center"}>
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>{notDoneItems}</TableBody>
        <br></br>
        <h2 className="text-3xl font-semibold px-3.5">Completed</h2>
        <TableBody>{doneItems}</TableBody>
      </Table>

      <AddTask />
    </>
  );
}

export default ToDoList;
