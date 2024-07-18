import React, { useState } from "react";
import axios from "axios";
import { TableCell, TableRow } from "./ui/table";
import DeleteTaskButton from "./DeleteTaskButton";
import DoneButton from "./DoneButton";
import { Checkbox } from "@/components/ui/checkbox";

const cellFormat = "p-4 text-500 text-lg font-semibold";
const inactiveFormat = "line-through opacity-50";

function ToDoItem({ _id, description, isDone, createdDate }) {
  const [isDoneState, setIsDoneState] = useState(isDone);

  const handleCheckboxClick = () => {
    axios({
      method: "PUT",
      url: `http://localhost:3000/tasks/${_id}`,
      data: {
        description: description,
        isDone: !isDoneState, // Toggle the isDoneState
        createdDate: createdDate,
      },
      timeout: 5000, // Add a timeout of 5 seconds
    })
      .then((response) => {
        console.log("Task marked as done", response);
        setIsDoneState(!isDoneState); // Update state after successful request
      })
      .catch((error) => {
        console.error("Error marking task as done", error);
      });
  };

  return (
    <TableRow className={isDoneState ? inactiveFormat : ""}>
      <TableCell className={cellFormat + " space-x-5"}>
        <Checkbox onClick={handleCheckboxClick} checked={isDoneState} />
        <label>{description}</label>
      </TableCell>
      <TableCell className={cellFormat}>
        {new Date(createdDate).toLocaleDateString()}
      </TableCell>
      {/* <TableCell>{isDoneState ? "Yes" : "No"}</TableCell> */}
      <TableCell className={cellFormat + " text-center space-x-10"}>
        <DeleteTaskButton _id={_id} />
      </TableCell>
    </TableRow>
  );
}

export default ToDoItem;
