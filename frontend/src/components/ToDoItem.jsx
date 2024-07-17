import React from "react";
import { TableCell, TableRow } from "./ui/table";
import { Button } from "@/components/ui/button";

const cellFormat =
  "border border-slate-300 p-4 text-500 text-lg font-semibold ";

const ToDoItem = ({ description, isDone, createdDate }) => {
  // conditional shading for tasks that are done
  const conditionalShade = isDone ? "bg-slate-500 opacity-50" : "";

  // only show done button for tasks that are not done
  const doneButton = (isDone) => {
    if (!isDone) {
      return <Button>Done!</Button>;
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
        {createdDate.toLocaleDateString()}
      </TableCell>
      <TableCell className={cellFormat + " text-center " + conditionalShade}>
        {doneButton(isDone)}
      </TableCell>
    </TableRow>
  );
};

export default ToDoItem;
