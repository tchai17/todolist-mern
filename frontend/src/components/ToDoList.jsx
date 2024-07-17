import React, { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import axios from "axios";

// import from shadcn
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
  // sample data, replace when endpoint is setup
  const toDoItems = [
    {
      description: "test1",
      isDone: true,
      createdDate: new Date("2024-01-01"),
    },
    {
      description: "test2",
      isDone: false,
      createdDate: new Date("2024-02-01"),
    },
    {
      description: "test3",
      isDone: true,
      createdDate: new Date("2024-05-01"),
    },
    {
      description: "test4",
      isDone: true,
      createdDate: new Date("2024-07-01"),
    },
    {
      description: "test5",
      isDone: false,
      createdDate: new Date("2024-07-01"),
    },
  ];

  const [toDoItems1, setToDoItems] = useState(toDoItems);

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

  // define css classes for table title
  const tableTitleFormat =
    "text-500 font-sans text-lg font-semibold text-start";

  const ToDoItemsMap = toDoItems1.map((task, index) => {
    if (!task.isDone)
      return (
        <ToDoItem
          key={index}
          _id={task._id}
          description={task.description}
          isDone={task.isDone}
          createdDate={task.createdDate}
        />
      );
  });

  if (toDoItems.length === 0) {
    return <p>No toDoItems yet!</p>;
  } else {
    return (
      <>
        <Table className="font-sans">
          <TableHeader>
            <TableRow>
              <TableHead className={tableTitleFormat}>Description</TableHead>
              {/* <TableHead className={tableTitleFormat}>Done?</TableHead> */}
              <TableHead className={tableTitleFormat}>Created Date</TableHead>
              <TableHead className={tableTitleFormat + " text-center"}>
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>{ToDoItemsMap}</TableBody>
        </Table>
        <AddTask />
      </>
    );
  }
}
export default ToDoList;
