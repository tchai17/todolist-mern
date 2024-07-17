import React from "react";
import { TableCell, TableRow } from "./ui/table";

const cellFormat = "border border-slate-300 p-4 text-500 text-lg font-semibold";

const Task = ({ description, isDone, createdDate }) => {
  return (
    <TableRow>
      <TableCell className={cellFormat}>{description}</TableCell>
      <TableCell className={cellFormat}>{isDone ? "Yes" : "No"}</TableCell>
      <TableCell className={cellFormat}>
        {createdDate.toLocaleDateString()}
      </TableCell>
    </TableRow>
  );
};

export default Task;
