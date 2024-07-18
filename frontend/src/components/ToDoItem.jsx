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

  function markAsDone() {
    axios({
      method: "PUT",
      url: `http://localhost:3000/tasks/${_id}`,
      data: {
        description: description,
        isDone: true,
        createdDate: createdDate,
      },
      timeout: 5000, // Add a timeout of 5 seconds
    })
      .then((response) => {
        console.log("Task marked as done", response);
        console.log(response.data);
        // Refresh data on the page
        location.reload();
      })
      .catch((error) => {
        console.error("Error marking task as done", error);
      });
  }

  const handleCheckboxClick = () => {
    markAsDone();
    setIsDoneState(!isDoneState);
  };

  return (
    <TableRow className={isDoneState ? inactiveFormat : ""}>
      <TableCell className={cellFormat + " space-x-5"}>
        <Checkbox onClick={() => handleCheckboxClick()} checked={isDoneState} />
        <label>{description}</label>
      </TableCell>
      <TableCell className={cellFormat}>
        {new Date(createdDate).toLocaleDateString()}
      </TableCell>
      <TableCell className={cellFormat + " text-center space-x-10"}>
        {/* <DoneButton
          _id={_id}
          description={description}
          isDone={isDone}
          createdDate={createdDate}
        /> */}
        <DeleteTaskButton _id={_id} />
      </TableCell>
    </TableRow>
  );
}

export default ToDoItem;
