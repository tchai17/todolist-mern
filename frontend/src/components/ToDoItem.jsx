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
      url: "http://localhost:3000/tasks/" + _id,
      data: {
        _id: _id,
        isDone: true, // set task as done
        createdDate: createdDate,
        description: description,
      },
    }).catch((error) => console.error("Error marking task as done", error));
    console.log("Updated task");
    // location.reload();
  }

  const handleCheckboxClick = () => {
    setIsDoneState(!isDoneState);
    markAsDone();
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
        <DoneButton
          _id={_id}
          description={description}
          isDone={isDone}
          createdDate={createdDate}
        />
        <DeleteTaskButton _id={_id} />
      </TableCell>
    </TableRow>
  );
}

export default ToDoItem;
