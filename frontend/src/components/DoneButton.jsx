import React from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

function DoneButton({ _id, description, isDone, createdDate }) {
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

  return <Button onClick={markAsDone}>Done!</Button>;
}

export default DoneButton;
