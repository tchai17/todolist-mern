import React, { useState, useEffect } from "react";
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

function ToDoList() {
  const [tasks1, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/items/")
      .then((response) => setTasks(response.data))
      .catch((error) =>
        console.error("There was an error fetching the ToDoList!", error)
      );
  }, []);
  const tableBorder = " border border-slate-300 p-4 ";
  const textFormat = "text-500 font-sans text-lg font-semibold";
  const tableTitleFormat =
    "text-500 font-sans text-lg font-semibold text-start";

  const tasks = [
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

  const taskItems = tasks.map((task, index) => (
    <TableRow key={index}>
      <TableCell className={tableBorder + textFormat}>
        {task.description}
      </TableCell>
      <TableCell className={tableBorder + textFormat}>
        {task.isDone ? "Yes" : "No"}
      </TableCell>
      <TableCell className={tableBorder + textFormat}>
        {task.createdDate.toLocaleDateString()}
      </TableCell>
    </TableRow>
  ));

  if (tasks.length === 0) {
    return <p>No tasks yet!</p>;
  } else {
    return (
      <div className="font-sans">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className={tableTitleFormat}>Description</TableHead>
              <TableHead className={tableTitleFormat}>Done?</TableHead>
              <TableHead className={tableTitleFormat}>Created Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>{taskItems}</TableBody>
        </Table>
      </div>
    );
  }
}
export default ToDoList;
