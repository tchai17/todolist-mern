import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import axios from "axios";
import moment from "moment";

// this component encapsulates the logic to add a new task to the to do list
const AddTask = () => {
  const [showInput, setShowInput] = useState(false);
  const [task, setTask] = useState("");

  const onClick = () => {
    setShowInput(!showInput);
  };

  const onChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(e.keyCode);
    setTask(value);
  };

const addTask = () => {
    // make a call to the api to add this task to the to do list
    const date = moment();
    const currentDate = date.format("DD/MM/YYYY");
    axios.post("http://localhost:3000/tasks", {
        description: task,
        isDone: "false",
        createdDate: currentDate
    })
    .then( (response) => {
        console.log(response);
        location.reload();
    })
    .catch( (error) => {
        console.log(error);
    });
}

  return (
    <>
    <div className="flex flex-row">
        <div className="flex-none">
        <Button size="icon" onClick={onClick}>
            <Plus />
        </Button>
        </div>
        <div className="flex-auto">
            {showInput && (
                <div className="flex justify-between px-6 ">
                    <Input
                        type="text"
                        placeholder="Add Task"
                        onChange={onChange}
                        value={task}
                    />
                <Button type="submit" onClick={addTask} className="px-3">Add</Button>
                </div>
            )}
        </div>
    </div>
    </>
  );
};

export default AddTask;
