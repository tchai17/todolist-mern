import React, { useState, useCallback } from "react";
import axios from "axios";
import { TableCell, TableRow } from "./ui/table";
import DeleteTaskButton from "./DeleteTaskButton";
import { Checkbox } from "@/components/ui/checkbox";

const cellFormat = "p-4 text-500 text-lg font-semibold no-underline";
const inactiveFormat = "line-through opacity-50";

function ToDoItem({ _id, description, isDone, createdDate, onTaskUpdate }) {
  const [isDoneState, setIsDoneState] = useState(isDone);

  const updateTaskStatus = (_id, description, isDone, createdDate) => {
    axios({
      method: "PUT",
      url: `http://localhost:3000/tasks/${_id}`,
      data: {
        description: description,
        isDone: isDone,
        createdDate: createdDate,
      },
      timeout: 5000,
    })
      .then((response) => {
        console.log("Task marked as done", response);
      })
      .catch((error) => {
        console.error("Error marking task as done", error);
        setIsDoneState(!isDone); // Revert state to original if request fails
      });
  };

  const handleCheckboxClick = useCallback(() => {
    // Toggle the isDoneState
    const newIsDoneState = !isDoneState;
    setIsDoneState(newIsDoneState);

    // Wait for 1.5 seconds and then call the onTaskUpdate function
    setTimeout(() => {
      // Call the onTaskUpdate function with the updated _id and newIsDoneState
      onTaskUpdate(_id, newIsDoneState);
    }, 1500);

    // Call the updateTaskStatus function with the updated _id, description, newIsDoneState, and createdDate
    updateTaskStatus(_id, description, newIsDoneState, createdDate);
  }, [isDoneState, _id, description, createdDate, onTaskUpdate]);
  return (
    <TableRow className={isDoneState ? inactiveFormat : ""}>
      <TableCell className={cellFormat + " space-x-5 text-wrap flex"}>
        <Checkbox
          onClick={handleCheckboxClick}
          checked={isDoneState}
          className="my-1.5"
        />
        <label>{description}</label>
      </TableCell>
      <TableCell className={cellFormat}>
        {new Date(createdDate).toLocaleDateString()}
      </TableCell>
      <TableCell className={cellFormat + " text-center"}>
        <DeleteTaskButton _id={_id} />
      </TableCell>
    </TableRow>
  );
}

export default ToDoItem;
