import React from "react";
import { TableCell, TableRow } from "./ui/table";
import { Button } from "@/components/ui/button";

const cellFormat = "border border-slate-300 p-4 text-500 text-lg font-semibold";

const ToDoItem = ({ description, isDone, createdDate }) => {
  return (
    <TableRow>
      <TableCell className={cellFormat}>{description}</TableCell>
      <TableCell className={cellFormat}>{isDone ? "Yes" : "No"}</TableCell>
      <TableCell className={cellFormat}>
        {createdDate.toLocaleDateString()}
      </TableCell>
      <TableCell className={cellFormat + " text-center"}>
        <Button>Done!</Button>
      </TableCell>
    </TableRow>
  );
};

export default ToDoItem;
