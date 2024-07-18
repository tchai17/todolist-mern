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
    // Make a PUT request to the backend to update the task status
    axios({
      // Set the HTTP method to PUT
      method: "PUT",
      // Set the URL of the request to the backend task endpoint with the task ID
      url: `http://localhost:3000/tasks/${_id}`,
      // Set the data to be sent in the request body
      data: {
        description: description, // The updated description of the task
        isDone: isDone, // The updated completion status of the task
        createdDate: createdDate, // The updated creation date of the task
      },
      // Set the timeout of the request to 5000 milliseconds (5 seconds), important to avoid axios loading problems
      timeout: 5000,
    })
      // If the request is successful, log a message to the console
      .then((response) => {
        console.log("Task marked as done", response);
      })
      // If the request fails, log an error message to the console and revert the state to the original if the request fails
      .catch((error) => {
        console.error("Error marking task as done", error);
        setIsDoneState(!isDone);
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
