import React from "react";
import { TableCell, TableRow } from "./ui/table";
import DeleteTaskButton from "./DeleteTaskButton";
import DoneButton from "./DoneButton";

const cellFormat = "p-4 text-500 text-lg font-semibold ";

function ToDoItem({ _id, description, isDone, createdDate }) {
  return (
    <TableRow>
      <TableCell className={cellFormat}>{description}</TableCell>
      {/* <TableCell className={cellFormat}>{isDone ? "Yes" : "No"}</TableCell> */}
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
