import React from "react";
import axios from "axios";
import { TableCell, TableRow } from "./ui/table";
import { Button } from "@/components/ui/button";

const cellFormat =
  "border border-slate-300 p-4 text-500 text-lg font-semibold ";

const ToDoItem = ({ _id, description, isDone, createdDate }) => {
  // conditional shading for tasks that are done
  const conditionalShade = isDone ? "bg-slate-500 opacity-50" : "";

  // only show done button for tasks that are not done
  const doneButton = (isDone) => {
    function markAsDone() {
      axios({
        method: "PUT",
        url: "http://localhost:3000/tasks/" + _id,
        data: {
          _id: _id,
          isDone: true,
          createdDate: createdDate,
          description: description,
        },
      }).catch((error) => console.error("Error marking task as done", error));
    }
    if (!isDone) {
      return <Button onClick={markAsDone}>Done!</Button>;
    }
  };
  return (
    <TableRow>
      <TableCell className={cellFormat + conditionalShade}>
        {description}
      </TableCell>
      <TableCell className={cellFormat + conditionalShade}>
        {isDone ? "Yes" : "No"}
      </TableCell>
      <TableCell className={cellFormat + conditionalShade}>
        {new Date(createdDate).toLocaleDateString()}
      </TableCell>
      <TableCell className={cellFormat + " text-center " + conditionalShade}>
        {doneButton(isDone)}
      </TableCell>
    </TableRow>
  );
};

export default ToDoItem;
