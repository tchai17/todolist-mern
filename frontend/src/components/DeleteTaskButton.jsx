import React from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

function DeleteTaskButton({ _id }) {
  function deleteTask() {
    axios({
      method: "DELETE",
      url: "http://localhost:3000/tasks/" + _id,
    }).catch((error) => console.error("Error deleting task", error));
  }

  return (
    <Button
      variant="destructive"
      onClick={deleteTask}
      className=" text-center "
    >
      Delete Task
    </Button>
  );
}
export default DeleteTaskButton;
