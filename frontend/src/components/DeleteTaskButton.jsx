import React from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

function DeleteTaskButton({ _id, onDelete }) {
  async function deleteTask() {
    try {
      await axios({
        method: "DELETE",
        url: `http://localhost:3000/tasks/${_id}`,
        timeout: 5000, // Set a reasonable timeout
      });
      onDelete(_id); // Call the onDelete prop to update the state
    } catch (error) {
      console.error("Error deleting task", error);
      // Optionally show an error message to the user here
    }
  }

  return (
    <Button variant="destructive" onClick={deleteTask} className="text-center">
      Delete Task
    </Button>
  );
}

export default DeleteTaskButton;
