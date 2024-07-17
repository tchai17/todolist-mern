import React from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

function DoneButton({ _id, description, isDone, createdDate }) {
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
    location.reload();
  }

  return <Button onClick={markAsDone}>Done!</Button>;
}

export default DoneButton;
