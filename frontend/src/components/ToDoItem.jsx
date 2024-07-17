import React from "react";
import axios from "axios";
import { TableCell, TableRow } from "./ui/table";
import { Button } from "@/components/ui/button";
import DeleteTaskButton from "./DeleteTaskButton";
import DoneButton from "./DoneButton";

const cellFormat =
  "border border-slate-300 p-4 text-500 text-lg font-semibold ";

function ToDoItem({ _id, description, isDone, createdDate }) {
  // conditional shading for tasks that are done
  const conditionalShade = isDone ? "bg-slate-500 opacity-50" : "";

  // only show done button for tasks that are not done
  const doneButton = (isDone) => {
    if (!isDone) {
      return (
        <DoneButton
          _id={_id}
          description={description}
          isDone={isDone}
          createdDate={createdDate}
        />
      );
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
      <TableCell
        className={cellFormat + " text-center space-x-10" + conditionalShade}
      >
        {doneButton(isDone)}
        <DeleteTaskButton _id={_id} />
      </TableCell>
    </TableRow>
  );
}

export default ToDoItem;
