import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Input } from "@/components/ui/input"
import axios from 'axios';
import moment from 'moment';

// this component encapsulates the logic to add a new task to the to do list
const AddTask = () => {

    const [ showInput, setShowInput ] = useState(false);
    const [ task, setTask ] = useState("");
    
    const onClick = () => {
        setShowInput( !showInput );
    }

    const onChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        console.log(name);
        setTask(value);
        console.log(task);
    }

    const addTask = () => {
        // make a call to the api to add this task to the to do list
        const date = moment();
        const currentDate = date.format("D/MM/YYYY");
        axios.post("http://localhost:3000/tasks", {
            description: task,
            isDone: "false",
            createdDate: currentDate
        })
        .then( (response) => {
            console.log(response);
        })
        .catch( (error) => {
            console.log(error);
        });
    }

    return (
        <>
            <Button size="icon md" onClick={onClick}>
                <Plus className='h-5 w-5'/>
            </Button>
            { showInput && 
            <div>
                <Input type='text' placeholder='Add Task' onChange={onChange} value={task}/>
                <Button onClick={addTask}>Add</Button>
            </div>
            }
        </>
    );
}

export default AddTask;